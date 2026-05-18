import { NextResponse } from "next/server";
import curriculumChapters from "@/data/curriculum";

// Static export: GET handler must not read from the Request object.
// Returns the curriculum list derived from static data.
export const dynamic = "force-static";

export async function GET() {
  const content = curriculumChapters.map((c) => ({
    id: c.id,
    title: c.title,
    subject: c.subject,
    class: c.classNum,
    chapter: c.num,
    type: "SUMMARY",
    xpReward: 10,
  }));
  return NextResponse.json(content);
}
