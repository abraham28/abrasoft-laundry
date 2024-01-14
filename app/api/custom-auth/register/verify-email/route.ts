import redisClient from "@/app/api/redis-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const client = await redisClient();
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );
    }

    const { otp, email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Please provide your email address" },
        { status: 400 },
      );
    }

    const dbOTP = await client.get(`otp:${email}`);

    if (!dbOTP) {
      return NextResponse.json(
        { error: "OTP is not generated" },
        { status: 400 },
      );
    }

    if (Number.isNaN(otp) || otp !== dbOTP)
      return NextResponse.json(
        { error: "Invalid One Time Pin (OTP)" },
        { status: 400 },
      );

    const userId = await client.get(`user_email:${email}`);

    if (!userId)
      return NextResponse.json(
        { error: "User ID associated with email not found" },
        { status: 400 },
      );

    const response = await client
      .multi()
      .hSet(`user:${userId}`, "user_email_verified", 1)
      .del(`otp:${email}`)
      .exec();

    if (response.every((result) => !result)) {
      return NextResponse.json(
        { error: "Error updating data in Redis" },
        { status: 500 },
      );
    }

    return NextResponse.json(
      { success: true, message: "OTP successfully verified" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  } finally {
    client.disconnect();
  }
}
