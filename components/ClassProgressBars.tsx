"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress } from "@/lib/progress";

const subjectConfig = {
  maths:   { icon: "🔢", label: "Mathematics", book: "Ganita Prakash 2026", color: "#7C3AED" },
  science: { icon: "🔬", label: "Science",     book: "Curiosity 2026",      color: "#06B6D4" },
};

interface Props {
  cls: number;
  chapterCounts: { maths: number; science: number };
}

export default function ClassProgressBars({ cls, chapterCounts }: Props) {
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    setVisited(getProgress().chaptersVisited);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {(["maths", "science"] as const).map((sub) => {
        const s = subjectConfig[sub];
        const total = chapterCounts[sub];
        const done = Array.from({ length: total }, (_, i) => `${cls}-${sub}-${i + 1}`)
          .filter((id) => visited.includes(id)).length;
        const pct = total ? Math.round((done / total) * 100) : 0;

        return (
          <Link key={sub} href={`/subject/${cls}/${sub}`}
            className="glass flex items-center gap-5 p-6 md:p-8 rounded-2xl transition-all active:scale-95 hover:border-purple-500/30 block group">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl flex-shrink-0"
              style={{ background:`${s.color}22`, border:`1px solid ${s.color}44` }}>
              {s.icon}
            </div>
            <div className="flex-1">
              <div className="font-black text-xl md:text-2xl text-white">{s.label}</div>
              <div className="text-sm mt-0.5 font-medium" style={{ color: s.color }}>{s.book}</div>
              <div className="text-xs text-slate-500 mt-1">{total} chapters · {done} visited</div>
              <div className="mt-3 h-1.5 bg-slate-800 rounded-full">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: `linear-gradient(90deg,${s.color},${s.color}88)` }} />
              </div>
            </div>
            <div className="text-slate-600 text-2xl md:text-3xl group-hover:text-slate-400 transition-colors">›</div>
          </Link>
        );
      })}
    </div>
  );
}
