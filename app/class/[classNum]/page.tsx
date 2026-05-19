import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import ClassProgressBars from "@/components/ClassProgressBars";

export function generateStaticParams() {
  return [{ classNum: "6" }, { classNum: "7" }, { classNum: "8" }];
}

const classMeta: Record<string, { emoji: string; color: string; level: string; desc: string }> = {
  "6": { emoji: "🪐", color: "#7C3AED", level: "Foundation", desc: "Build rock-solid basics in numbers, patterns, geometry and life sciences." },
  "7": { emoji: "🌍", color: "#06B6D4", level: "Building Up", desc: "Deepen concepts in algebra, data handling, physics and chemistry." },
  "8": { emoji: "🌟", color: "#F59E0B", level: "Board Ready", desc: "Master advanced topics and prepare for Class 9–10 and competitive exams." },
};

export default async function ClassPage({ params }: { params: Promise<{ classNum: string }> }) {
  const { classNum } = await params;
  const cls = parseInt(classNum);
  const meta = classMeta[classNum];
  const chapterCounts = cls === 6 ? { maths: 10, science: 10 } : cls === 7 ? { maths: 13, science: 13 } : { maths: 16, science: 16 };

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #0F0820 0%, #06070F 60%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop breadcrumb */}
        <div className="hidden md:flex items-center gap-2 px-8 py-3.5 sticky top-0 z-30"
          style={{ background:"rgba(6,7,15,0.92)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/home" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Home</Link>
          <span className="text-slate-800 text-xs">/</span>
          <span className="text-slate-300 text-xs font-semibold">Class {cls}</span>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">

          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-6">
            <Link href="/home" className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400 text-lg flex-shrink-0">‹</Link>
            <div>
              <h1 className="text-2xl font-black text-white">{meta.emoji} Class {cls}</h1>
              <p className="text-slate-600 text-xs mt-0.5">Select a subject</p>
            </div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:flex items-center gap-5 mb-8">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl"
              style={{ background: `${meta.color}15`, border: `1px solid ${meta.color}33` }}>
              {meta.emoji}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <h1 className="text-3xl font-black text-white">Class {cls}</h1>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${meta.color}20`, color: meta.color }}>{meta.level}</span>
              </div>
              <p className="text-slate-500 text-sm">{meta.desc}</p>
            </div>
          </div>

          {/* Subject cards */}
          <ClassProgressBars cls={cls} chapterCounts={chapterCounts} />

          {/* Tip */}
          <div className="glass-card rounded-xl p-4 flex items-center gap-3 mt-5">
            <span className="text-lg flex-shrink-0">🎯</span>
            <p className="text-xs text-slate-500 leading-relaxed">Class {cls} concepts form the foundation for Classes 9–10 and competitive exam preparation.</p>
          </div>
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
