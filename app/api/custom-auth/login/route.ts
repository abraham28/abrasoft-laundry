import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import redisDb from "../../../../redis/redis-client";
import { BASE_URL, REGISTER_VERIFY_EMAIL_ROUTE } from "@/app/constants";
import { User } from "next-auth";

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST")
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );

    const { email, password } = await req.json();

    const user_data = await redisDb.getUserByEmail(email);

    if (!user_data)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    const storedHashedPassword = user_data.user_password;

    const isPasswordMatched = await bcrypt.compare(
      password,
      storedHashedPassword,
    );

    if (!isPasswordMatched)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    if (!user_data.user_email_verified) {
      const encryptedEmail = btoa(user_data.user_email);
      return NextResponse.json(
        {
          error: "Please verify email first.",
          emailVerificationLink: `${BASE_URL}/${REGISTER_VERIFY_EMAIL_ROUTE}?email=${encryptedEmail}`,
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        data: { email: user_data.user_email, id: user_data.user_id } as User,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error in login route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
