import { NextRequest, NextResponse } from "next/server";
import { updateStreak } from "@/lib/streak";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  if (!userId) {
    return NextResponse.json({ error: "userId required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });
  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const result = await updateStreak(userId);

  if (result.xpBonus > 0) {
    await prisma.user.update({
      where: { id: userId },
      data: { xpTotal: { increment: result.xpBonus } },
    });
  }

  return NextResponse.json(result);
}
