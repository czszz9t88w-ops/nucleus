import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";

const subjectConfig = {
  maths:   { icon: "🔢", label: "Mathematics", book: "Ganita Prakash 2026", color: "#7C3AED", chapters: { 6: 10, 7: 13, 8: 16 } },
  science: { icon: "🔬", label: "Science",     book: "Curiosity 2026",      color: "#06B6D4", chapters: { 6: 10, 7: 13, 8: 16 } },
};

export default async function ClassPage({ params }: { params: Promise<{ classNum: string }> }) {
  const { classNum } = await params;
  const cls = parseInt(classNum) as 6 | 7 | 8;

  return (
    <div className="relative min-h-screen pb-24 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 px-5 pt-12 pb-6 flex items-center gap-3">
        <Link href="/home" className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
        <div>
          <h1 className="text-2xl font-black text-white">Class {cls}</h1>
          <p className="text-slate-500 text-xs">Choose a subject</p>
        </div>
      </div>

      <div className="relative z-10 px-5 space-y-4">
        {(["maths","science"] as const).map((sub) => {
          const s = subjectConfig[sub];
          const chapCount = s.chapters[cls];
          return (
            <Link key={sub} href={`/subject/${cls}/${sub}`}
              className="glass flex items-center gap-5 p-6 rounded-2xl transition-transform active:scale-95 block">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0"
                style={{ background: `${s.color}22`, border: `1px solid ${s.color}44` }}>
                {s.icon}
              </div>
              <div className="flex-1">
                <div className="font-black text-xl text-white">{s.label}</div>
                <div className="text-xs mt-1" style={{ color: s.color }}>{s.book}</div>
                <div className="text-xs text-slate-500 mt-1">{chapCount} chapters</div>
                {/* Mini progress bar */}
                <div className="mt-2 h-1 bg-slate-800 rounded-full">
                  <div className="h-full w-0 rounded-full" style={{ background: `linear-gradient(90deg,${s.color},${s.color}88)` }} />
                </div>
              </div>
              <div className="text-slate-600 text-xl">›</div>
            </Link>
          );
        })}

        <div className="glass rounded-2xl p-4 mt-2">
          <div className="flex items-center gap-2 mb-2">
            <span>🎯</span>
            <span className="text-sm font-semibold text-white">JEE / NEET Foundation</span>
          </div>
          <p className="text-xs text-slate-500">Class {cls} concepts form the foundation for competitive exams. Master these now for a head start.</p>
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
