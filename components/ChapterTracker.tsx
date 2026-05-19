"use client";
import { useEffect } from "react";
import { markChapterVisited } from "@/lib/progress";

export default function ChapterTracker({ chapterId }: { chapterId: string }) {
  useEffect(() => {
    markChapterVisited(chapterId);
  }, [chapterId]);
  return null;
}
