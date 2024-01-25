import { NextRequest, NextResponse } from "next/server";
import redisDb from "@/redis/redis-client";

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );
    }

    const { email } = await req.json();

    const userId = await redisDb.getUserIdByEmail(email);

    if (!userId) {
      return NextResponse.json(
        {
          error:
            "This email is not yet registered. You cannot initiate a password reset for an unregistered email.",
        },
        { status: 401 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Email found. Proceed to the next step. Please verify your email.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Error in the reset password route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
