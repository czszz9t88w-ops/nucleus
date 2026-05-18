import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cacheGet, cacheSet } from "@/lib/redis";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const subject = searchParams.get("subject");
  const classNum = searchParams.get("class");

  const cacheKey = `content:${classNum}:${subject || "all"}`;
  const cached = await cacheGet(cacheKey);
  if (cached) return NextResponse.json(cached);

  const content = await prisma.content.findMany({
    where: {
      isActive: true,
      ...(classNum ? { class: Number(classNum) } : {}),
      ...(subject ? { subject } : {}),
    },
    orderBy: [{ chapter: "asc" }, { topic: "asc" }],
    select: {
      id: true,
      title: true,
      titleHi: true,
      subject: true,
      class: true,
      chapter: true,
      topic: true,
      type: true,
      videoUrl: true,
      durationSec: true,
      xpReward: true,
    },
  });

  await cacheSet(cacheKey, content, 600);
  return NextResponse.json(content);
}
