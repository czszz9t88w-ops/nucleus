import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import ClassProgressBars from "@/components/ClassProgressBars";

export function generateStaticParams() {
  return [{ classNum: "6" }, { classNum: "7" }, { classNum: "8" }];
}

const classEmoji: Record<string, string> = { "6": "🪐", "7": "🌍", "8": "🌟" };

export default async function ClassPage({ params }: { params: Promise<{ classNum: string }> }) {
  const { classNum } = await params;
  const cls = parseInt(classNum);
  const chapterCounts = cls === 6 ? { maths: 10, science: 10 } : cls === 7 ? { maths: 13, science: 13 } : { maths: 16, science: 16 };

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
              <h1 className="text-2xl font-black text-white">{classEmoji[classNum]} Class {cls}</h1>
              <p className="text-slate-500 text-xs">Choose a subject · NCERT 2026</p>
            </div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:flex items-center gap-4 mb-8">
            <div className="text-5xl">{classEmoji[classNum]}</div>
            <div>
              <h1 className="text-3xl font-black text-white">Class {cls}</h1>
              <p className="text-slate-500 mt-1 text-sm">Select a subject · NCERT 2026 Curriculum</p>
            </div>
          </div>

          {/* Subject cards with live progress */}
          <ClassProgressBars cls={cls} chapterCounts={chapterCounts} />

          <div className="glass rounded-2xl p-4 flex items-center gap-3 mt-5">
            <span>🎯</span>
            <p className="text-xs text-slate-500">Class {cls} concepts form the foundation for Classes 9-10 and competitive exams. Master these now.</p>
          </div>
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
