import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";

const OTP_TTL = 300; // 5 minutes

function generateOTP(): string {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: NextRequest) {
  const { phone } = await req.json();

  if (!phone || !/^[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json({ error: "Invalid Indian phone number" }, { status: 400 });
  }

  const otp = generateOTP();
  await redis.setex(`otp:${phone}`, OTP_TTL, otp);

  try {
    const res = await fetch(
      `https://www.fast2sms.com/dev/bulkV2?authorization=${process.env.FAST2SMS_API_KEY}` +
        `&variables_values=${otp}&route=otp&numbers=${phone}`,
      { method: "GET" }
    );
    const data = await res.json();
    if (!data.return) {
      throw new Error("Fast2SMS failed");
    }
  } catch (err) {
    // Log but don't expose provider errors to client
    console.error("OTP send error:", err);
    return NextResponse.json({ error: "Failed to send OTP" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
