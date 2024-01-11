import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "cookies-next";
import { generateJWT, generateUUID, hashPassword } from "../../helpers";
import { emailSchema, passwordSchema } from "@/helpers/validators";
import { kv } from "@vercel/kv";
import { DB, UUID, User } from "../../models";

export async function POST(req: NextRequest) {
  try {
    // Check if JWT_SECRET_KEY is set before proceeding
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error(
        "JWT_SECRET_KEY is not set. Unable to proceed with the operation.",
      );
    }

    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );
    }

    const { email, password, confirmPassword, remember } = await req.json();

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
    const userIdResult = await kv.get<DB["user_email:[email]"]>(email);

    if (userIdResult !== null) {
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

    // Insert the new user into the database
    const user_id = generateUUID();
    const user_data: User = {
      user_id: user_id,
      user_email: email,
      user_password: hashedPassword,
    };
    kv.set(`user_email:${email}`, user_id as UUID);
    kv.hset(`user:${user_id}`, { ...user_data });

    // Set a JWT token if "remember" option is selected
    if (remember) {
      const userData = {
        email: user_data.user_email,
      };

      const token = generateJWT(userData);
      setCookie("jwt", token, {
        path: "/",
        maxAge: 30 * 24 * 60 * 60, // 30 days in seconds
        httpOnly: true,
        sameSite: "lax",
      });

      return NextResponse.json(
        { success: true, message: "Registration successful" },
        { status: 200, headers: { "Set-Cookie": "jwt=" + token } },
      );
    }

    return NextResponse.json(
      { success: true, message: "Registration successful" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error in registration route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
