import redisDb from "@/redis/redis-client";
import { generateJWT } from "@/redis/utils/generic";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );
    }

    const { otp, email } = await req.json();

    if (!otp || Number.isNaN(otp)) {
      return NextResponse.json(
        { error: "Invalid One Time Pin (OTP)" },
        { status: 400 },
      );
    }

    if (!email) {
      return NextResponse.json(
        { error: "Please provide your email address" },
        { status: 400 },
      );
    }

    const isVerifiedOTP = await redisDb.verifyOTP({
      otp: Number(otp),
      email: email,
    });

    if (!isVerifiedOTP) {
      return NextResponse.json(
        { error: "Invalid One Time Pin (OTP)" },
        { status: 400 },
      );
    }

    // Generate and return an authorization token
    const authToken = generateJWT(email);

    return NextResponse.json(
      {
        success: true,
        message:
          "OTP successfully verified. Use the provided authorization token for the next step.",
        authToken,
      },
      { status: 200 },
    );
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
