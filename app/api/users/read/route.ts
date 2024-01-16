import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    if (req.method !== "GET")
      return NextResponse.json(
        { error: "Method Not Allowed" },
        { status: 405 },
      );

    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        // data: { email: user_data.user_email, id: user_data.user_id } as User,
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
