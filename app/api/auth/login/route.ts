import { NextRequest, NextResponse } from "next/server";
import { setCookie } from "cookies-next";
import { generateJWT } from "../../helpers";
import { createPool, endPool } from "../../db";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    // Check if JWT_SECRET_KEY is set before proceeding
    if (!process.env.JWT_SECRET_KEY) {
      throw new Error(
        "JWT_SECRET_KEY is not set. contact system administrator.",
      );
    }

    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );
    }

    const { email, password, remember } = await req.json();

    // Query the database to check user credentials
    const pool = createPool(); // Create a new pool instance
    const result = await pool.query(
      "SELECT user_password FROM users WHERE user_email = $1",
      [email],
    );

    if (result.rows.length > 0) {
      const storedHashedPassword = result.rows[0].user_password;

      // Compare the hashed passwords
      const passwordMatch = await bcrypt.compare(
        password,
        storedHashedPassword,
      );

      if (passwordMatch) {
        // User authentication successful

        // Set a JWT token if "remember" option is selected
        if (remember) {
          const userData = {
            email: result.rows[0].user_email,
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
            { success: true, message: "Login successful" },
            { status: 200, headers: { "Set-Cookie": "jwt=" + token } },
          );
        }

        return NextResponse.json(
          { success: true, message: "Login successful" },
          { status: 200 },
        );
      }
    }

    // Invalid credentials
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (error) {
    console.error("Error in login route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  } finally {
    // It's important to release the client back to the pool after using it
    await endPool();
  }
}
