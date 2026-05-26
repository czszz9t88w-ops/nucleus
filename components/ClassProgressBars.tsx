"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getProgress } from "@/lib/progress";
import chapters from "@/data/curriculum";

const subjectConfig = {
  maths:   { icon: "🔢", label: "Mathematics", book: "Ganita Prakash 2026", color: "#7C3AED" },
  science: { icon: "🔬", label: "Science",     book: "Curiosity 2026",      color: "#06B6D4" },
};

interface Props {
  cls: number;
}

export default function ClassProgressBars({ cls }: Props) {
  const [visited, setVisited] = useState<string[]>([]);

  useEffect(() => {
    setVisited(getProgress().chaptersVisited);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {(["maths", "science"] as const).map((sub) => {
        const s = subjectConfig[sub];
        const subChapters = chapters.filter((c) => c.classNum === cls && c.subject === sub);
        const total = subChapters.length;
        const done = subChapters.filter((c) => visited.includes(c.id)).length;
        const pct = total ? Math.round((done / total) * 100) : 0;

        return (
          <Link key={sub} href={`/subject/${cls}/${sub}`}
            className="glass-card flex items-center gap-5 p-6 md:p-7 rounded-2xl transition-all active:scale-[0.98] group block">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
              style={{ background:`${s.color}15`, border:`1px solid ${s.color}33` }}>
              {s.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-black text-lg text-white">{s.label}</div>
              <div className="text-xs mt-0.5 font-medium" style={{ color: s.color }}>{s.book}</div>
              <div className="text-xs text-slate-600 mt-1">{total} chapters · {done} visited</div>
              <div className="mt-2.5 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${pct}%`, background: `linear-gradient(90deg,${s.color},${s.color}88)` }} />
              </div>
              <div className="text-xs mt-1.5 font-semibold" style={{ color: s.color }}>{pct}% complete</div>
            </div>
            <div className="text-slate-700 text-2xl group-hover:text-slate-400 transition-colors flex-shrink-0">›</div>
          </Link>
        );
      })}
    </div>
  );
}
