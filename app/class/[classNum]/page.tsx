import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";

export function generateStaticParams() {
  return [{ classNum: "6" }, { classNum: "7" }, { classNum: "8" }];
}

const subjectConfig = {
  maths:   { icon: "🔢", label: "Mathematics", book: "Ganita Prakash 2026", color: "#7C3AED", chapters: { 6: 10, 7: 13, 8: 16 } as Record<number,number> },
  science: { icon: "🔬", label: "Science",     book: "Curiosity 2026",      color: "#06B6D4", chapters: { 6: 10, 7: 13, 8: 16 } as Record<number,number> },
};

export default async function ClassPage({ params }: { params: Promise<{ classNum: string }> }) {
  const { classNum } = await params;
  const cls = parseInt(classNum);

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 sticky top-0 z-30"
          style={{ background:"rgba(6,7,15,0.85)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/home" className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Home</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white text-sm font-semibold">Class {cls}</span>
        </div>

        <div className="px-5 pt-12 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-6">
            <Link href="/home" className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div>
              <h1 className="text-2xl font-black text-white">Class {cls}</h1>
              <p className="text-slate-500 text-xs">Choose a subject</p>
            </div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-8">
            <h1 className="text-3xl font-black text-white">Class {cls}</h1>
            <p className="text-slate-500 mt-1">Select a subject to browse chapters</p>
          </div>

          {/* Subject cards — stacked on mobile, 2-col on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
            {(["maths","science"] as const).map(sub => {
              const s = subjectConfig[sub];
              const count = s.chapters[cls];
              return (
                <Link key={sub} href={`/subject/${cls}/${sub}`}
                  className="glass flex items-center gap-5 p-6 md:p-8 rounded-2xl transition-all active:scale-95 hover:border-purple-500/30 block group">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl md:text-4xl flex-shrink-0"
                    style={{ background:`${s.color}22`, border:`1px solid ${s.color}44` }}>
                    {s.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-black text-xl md:text-2xl text-white">{s.label}</div>
                    <div className="text-sm mt-1 font-medium" style={{ color: s.color }}>{s.book}</div>
                    <div className="text-xs text-slate-500 mt-1">{count} chapters</div>
                    <div className="mt-3 h-1 bg-slate-800 rounded-full">
                      <div className="h-full w-0 rounded-full" style={{ background:`linear-gradient(90deg,${s.color},${s.color}88)` }} />
                    </div>
                  </div>
                  <div className="text-slate-600 text-2xl md:text-3xl">›</div>
                </Link>
              );
            })}
          </div>

          <div className="glass rounded-2xl p-4 flex items-center gap-3">
            <span>🎯</span>
            <p className="text-xs text-slate-500">Class {cls} concepts form the foundation for competitive exams. Master these now for a head start.</p>
          </div>
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
