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

    const { email } = await req.json();

    if (!email) {
      return NextResponse.json(
        { error: "Please provide your email address" },
        { status: 400 },
      );
    }

    const OTP = await client.get(`otp:${email}`);

    if (!OTP) {
      return NextResponse.json(
        { error: "OTP is not generated" },
        { status: 400 },
      );
    }

    // TODO: Add a function to avoid getting spammed for resend

    // TODO: Send an email to user
    console.log(
      `Please verify your email by entering this OTP ${OTP.toString()} in the verification page`,
    );

    return NextResponse.json(
      { success: true, message: "OTP successfully resent" },
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
