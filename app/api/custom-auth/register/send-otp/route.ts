import redisDb from "@/app/api/redis-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
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

    const sendSuccess = await redisDb.sendOTP(email);

    if (!sendSuccess) {
      return NextResponse.json(
        { error: "OTP is not generated" },
        { status: 400 },
      );
    }

    return NextResponse.json(
      { success: true, message: "OTP successfully resent" },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
