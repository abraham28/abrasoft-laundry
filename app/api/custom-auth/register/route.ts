import { NextRequest, NextResponse } from "next/server";
import { generateUUID, hashPassword } from "../../../../redis/utils/generic";
import { emailSchema, passwordSchema } from "@/helpers/validators";
import redisDb from "../../../../redis/redis-client";

export async function POST(req: NextRequest) {
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

    if (await redisDb.isUserEmailVerified(email)) {
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
    const existingUserId = await redisDb.getUserIdByEmail(email);

    // Insert the new user into the database
    const user_id = existingUserId || generateUUID();
    const user_data = {
      user_id: user_id,
      user_email: email,
      user_password: hashedPassword,
    };

    const createdUser = await redisDb.createUser(user_data);
    if (!createdUser) throw new Error("Failed to create User");

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
    if (error instanceof Error)
      return NextResponse.json({ error: error.message }, { status: 500 });

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
