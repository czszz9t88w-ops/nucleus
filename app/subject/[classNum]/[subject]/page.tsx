import Link from "next/link";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import SubjectChapterList from "@/components/SubjectChapterList";
import { getChapters, type ClassNum, type Subject } from "@/data/curriculum";

export function generateStaticParams() {
  return ["6", "7", "8"].flatMap((classNum) =>
    ["maths", "science"].map((subject) => ({ classNum, subject }))
  );
}

const subjectMeta: Record<Subject, { color: string; icon: string; book: string; label: string }> = {
  maths:   { color: "#7C3AED", icon: "🔢", book: "Ganita Prakash 2026", label: "Mathematics" },
  science: { color: "#06B6D4", icon: "🔬", book: "Curiosity 2026",      label: "Science" },
};

export default async function SubjectPage({ params }: { params: Promise<{ classNum: string; subject: string }> }) {
  const { classNum, subject } = await params;
  const cls = parseInt(classNum) as ClassNum;
  const sub = subject as Subject;
  const chapters = getChapters(cls, sub);
  const { color, icon, book, label } = subjectMeta[sub];

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
          <Link href={`/class/${cls}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Class {cls}</Link>
          <span className="text-slate-700">/</span>
          <span className="text-white text-sm font-semibold">{label}</span>
        </div>

        <div className="px-5 pt-12 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-6">
            <Link href={`/class/${cls}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{icon}</span>
                <h1 className="text-2xl font-black text-white">{label}</h1>
              </div>
              <p className="text-xs mt-0.5" style={{ color }}>Class {cls} · {chapters.length} Chapters · NCERT 2026</p>
            </div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                style={{ background:`${color}22`, border:`1px solid ${color}44` }}>{icon}</div>
              <div>
                <h1 className="text-3xl font-black text-white">{label}</h1>
                <p className="text-sm mt-0.5" style={{ color }}>{book} · Class {cls} · {chapters.length} chapters</p>
              </div>
            </div>
            <div className="glass px-4 py-2 rounded-xl text-xs text-slate-400">NCERT 2026 · CBSE</div>
          </div>

          {/* Chapter list with live progress */}
          <SubjectChapterList chapters={chapters} color={color} cls={cls} sub={sub} />
        </div>
      </div>

      <Chatbot />
      <BottomNav />
    </div>
  );
}
