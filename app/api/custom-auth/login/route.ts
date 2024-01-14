import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import redisClient from "../../redis-client";

export async function POST(req: NextRequest) {
  const client = await redisClient();

  try {
    if (!process.env.NEXTAUTH_SECRET) {
      throw new Error(
        "NEXTAUTH_SECRET is not set. contact system administrator.",
      );
    }

    if (req.method !== "POST")
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );

    const { email, password } = await req.json();

    const userId = await client.get(`user_email:${email}`);
    if (!userId)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    const user_data = await client.hGetAll(`user:${userId}`);

    if (!user_data)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    const storedHashedPassword = user_data.user_password as string;

    const isPasswordMatched = await bcrypt.compare(
      password,
      storedHashedPassword,
    );

    if (!isPasswordMatched)
      return NextResponse.json(
        { error: "Invalid credentials" },
        { status: 401 },
      );

    const cookieData = {
      email: user_data.user_email,
    };

    return NextResponse.json(
      { success: true, message: "Login successful", data: cookieData },
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
  } finally {
    await client.disconnect();
  }
}
