import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "cookies-next";
import { generateJWT, hashPassword } from "../../helpers";
import { createPool, endPool } from "../../db";
import { emailSchema, passwordSchema } from "@/helpers/validators";

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
    const pool = createPool();
    const existingUserResult = await pool.query(
      "SELECT * FROM users WHERE user_email = $1",
      [email],
    );

    if (existingUserResult.rows.length > 0) {
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
    const result = await pool.query(
      "INSERT INTO users (user_email, user_password) VALUES ($1, $2) RETURNING *",
      [email, hashedPassword],
    );

    // Get the newly inserted user
    const newUser = result.rows[0];

    // Set a JWT token if "remember" option is selected
    if (remember) {
      const userData = {
        email: newUser.user_email,
        // Add more user data as needed
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
  } finally {
    await endPool();
  }
}
