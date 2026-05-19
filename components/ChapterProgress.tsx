"use client";
import { useEffect, useState } from "react";
import { getProgress } from "@/lib/progress";

interface Props {
  chapterId: string;
  color: string;
}

export default function ChapterProgress({ chapterId, color }: Props) {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const { worksheetsDone } = getProgress();
    const keys = [`${chapterId}-mcq-0`, `${chapterId}-mcq-1`, `${chapterId}-qa-0`, `${chapterId}-qa-1`];
    const done = keys.filter((k) => worksheetsDone.includes(k)).length;
    setPct(Math.round((done / keys.length) * 100));
  }, [chapterId]);

  return (
    <>
      <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
        <span>Chapter progress</span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 bg-slate-800 rounded-full">
        <div
          className="h-full rounded-full transition-all duration-700"
          style={{ width: `${pct}%`, background: `linear-gradient(90deg,${color},${color}88)` }}
        />
      </div>
    </>
  );
}
