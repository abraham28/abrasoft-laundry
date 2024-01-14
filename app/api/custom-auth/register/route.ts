import { NextRequest, NextResponse } from "next/server";
import { generateOTP, generateUUID, hashPassword } from "../../helpers";
import { emailSchema, passwordSchema } from "@/helpers/validators";
import redisClient from "../../redis-client";
import { WatchError } from "redis";

export async function POST(req: NextRequest) {
  const client = await redisClient();
  try {
    // Check if NEXTAUTH_SECRET is set before proceeding
    if (!process.env.NEXTAUTH_SECRET) {
      throw new Error(
        "NEXTAUTH_SECRET is not set. Unable to proceed with the operation.",
      );
    }

    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );
    }

    const { email, password, confirmPassword } = await req.json();

    const emailValidation = await emailSchema
      .validate(email, { abortEarly: false })
      .then(() => {
        // Continue with the rest of your logic if validation passes
        return NextResponse.json({
          success: true,
          message: "Validation successful",
        });
      })
      .catch((validationError) => {
        // Send the detailed error message from the Yup schema
        return NextResponse.json(
          { error: validationError.errors[0] },
          { status: 400 },
        );
      });

    if (!emailValidation.ok) {
      return emailValidation;
    }

    // Validate password and confirmPassword match
    if (password !== confirmPassword) {
      return NextResponse.json(
        { error: "Password and Confirm Password do not match" },
        { status: 400 },
      );
    }

    // Check if the email is already registered
    const userIdResult = await client.get(`user_email:${email}`);
    const isEmailVerified = await client.hGet(
      `user:${userIdResult}`,
      "user_email_verified",
    );

    if (isEmailVerified && Number(isEmailVerified) === 1) {
      return NextResponse.json(
        { error: "Email is already registered" },
        { status: 400 },
      );
    }

    const passwordValidation = await passwordSchema
      .validate(password, { abortEarly: false })
      .then(() => {
        // Continue with the rest of your logic if validation passes
        return NextResponse.json({
          success: true,
          message: "Validation successful",
        });
      })
      .catch((validationError) => {
        // Send the detailed error message from the Yup schema
        return NextResponse.json(
          { error: validationError.errors[0] },
          { status: 400 },
        );
      });

    if (!passwordValidation.ok) {
      return passwordValidation;
    }

    // Hash the password before storing it in the database
    const hashedPassword = await hashPassword(password);
    const OTP = generateOTP();

    // Insert the new user into the database
    const user_id = userIdResult || generateUUID();
    const user_data = {
      user_id: user_id,
      user_email: email,
      user_password: hashedPassword,
    };

    const createKvUserResults = await client.executeIsolated(
      async (isolatedClient) => {
        await isolatedClient.watch(`user_email:${email}`);

        // TODO: Send an email to user
        console.log(
          `Please verify your email by entering this OTP ${OTP.toString()} in the verification page`,
        );

        const result = await isolatedClient
          .multi()
          .set(`user_email:${email}`, user_id)
          .set(`otp:${email}`, OTP)
          .hSet(`user:${user_id}`, user_data)
          .exec();
        isolatedClient.disconnect();
        return result;
      },
    );

    if (createKvUserResults.every((result) => !result))
      return NextResponse.json(
        { error: "User creation error occured" },
        { status: 500 },
      );

    return NextResponse.json(
      {
        success: true,
        message:
          "Successfully registered, Please verify email on the next step",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    if (error instanceof WatchError)
      return NextResponse.json(
        { error: "User creation transaction aborted" },
        { status: 500 },
      );

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  } finally {
    client.disconnect();
  }
}
