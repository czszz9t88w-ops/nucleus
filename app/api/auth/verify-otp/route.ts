import { NextRequest, NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { phone, otp, name, class: studentClass, board, language } = await req.json();

  if (!phone || !otp) {
    return NextResponse.json({ error: "Phone and OTP required" }, { status: 400 });
  }

  const storedOTP = await redis.get<string>(`otp:${phone}`);
  if (!storedOTP || storedOTP !== otp) {
    return NextResponse.json({ error: "Invalid or expired OTP" }, { status: 401 });
  }

  await redis.del(`otp:${phone}`);

  let user = await prisma.user.findUnique({ where: { phone } });

  if (!user) {
    if (!name || !studentClass) {
      return NextResponse.json({ error: "Name and class required for new users" }, { status: 400 });
    }
    user = await prisma.user.create({
      data: {
        phone,
        name,
        class: Number(studentClass),
        board: board || "CBSE",
        language: language || "hi",
        streak: { create: {} },
      },
    });
  }

  return NextResponse.json({ success: true, userId: user.id, isNew: !user });
}
