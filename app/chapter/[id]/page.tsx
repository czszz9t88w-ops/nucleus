import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import ChapterTracker from "@/components/ChapterTracker";
import ChapterProgress from "@/components/ChapterProgress";
import chapters, { getChapterById } from "@/data/curriculum";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

const subColor: Record<string, string> = { maths: "#7C3AED", science: "#06B6D4" };

const menu = [
  { key:"notes",    icon:"📝",  label:"Chapter Notes",             sub:"3–4 pages summarised",      href:(id:string)=>`/chapter/${id}/notes` },
  { key:"snippets", icon:"💡",  label:"Snippets",                  sub:"Key terms & formulas",      href:(id:string)=>`/chapter/${id}/snippets` },
  { key:"mcq",      icon:"✅",  label:"MCQ + Assertion Worksheet", sub:"2 worksheets · 10 Q each",  href:(id:string)=>`/chapter/${id}/worksheet/mcq` },
  { key:"qa",       icon:"✍️",  label:"Q&A Worksheet",             sub:"2 worksheets · 10 Q each",  href:(id:string)=>`/chapter/${id}/worksheet/qa` },
];

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const color = subColor[chapter.subject];

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
          <Link href={`/class/${chapter.classNum}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">Class {chapter.classNum}</Link>
          <span className="text-slate-700">/</span>
          <Link href={`/subject/${chapter.classNum}/${chapter.subject}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors capitalize">
            {chapter.subject === "maths" ? "Mathematics" : "Science"}
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-white text-sm font-semibold truncate max-w-xs">Ch {chapter.num}: {chapter.title}</span>
        </div>

        <div className="px-5 pt-12 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-start gap-3 mb-6">
            <Link href={`/subject/${chapter.classNum}/${chapter.subject}`}
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400 flex-shrink-0 mt-1">‹</Link>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color }}>
                Class {chapter.classNum} · {chapter.subject === "maths" ? "Mathematics" : "Science"} · Chapter {chapter.num}
              </div>
              <h1 className="text-xl font-black text-white leading-tight">{chapter.emoji} {chapter.title}</h1>
            </div>
          </div>

          {/* Desktop two-column layout */}
          <div className="md:grid md:grid-cols-3 md:gap-8">
            {/* Left: chapter info */}
            <div className="hidden md:block">
              <div className="glass rounded-2xl p-6 sticky top-24">
                <div className="text-5xl mb-4">{chapter.emoji}</div>
                <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color }}>
                  Class {chapter.classNum} · Chapter {chapter.num}
                </div>
                <h1 className="text-xl font-black text-white leading-snug mb-3">{chapter.title}</h1>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="glass text-xs px-2 py-0.5 rounded-full text-slate-400">NCERT 2026</span>
                  <span className="glass text-xs px-2 py-0.5 rounded-full text-slate-400">CBSE</span>
                  <span className="glass text-xs px-2 py-0.5 rounded-full text-slate-400 capitalize">{chapter.subject}</span>
                </div>
                <div className="border-t pt-4 mt-2" style={{ borderColor:"rgba(255,255,255,0.08)" }}>
                  <ChapterProgress chapterId={id} color={color} />
                </div>
              </div>
            </div>

            {/* Right: menu */}
            <div className="md:col-span-2">
              {/* Mobile progress bar */}
              <div className="md:hidden glass rounded-xl p-3 mb-5">
                <ChapterProgress chapterId={id} color={color} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {menu.map((item, i) => (
                  <Link key={item.key} href={item.href(id)}
                    className={`glass flex items-center gap-4 px-5 py-4 rounded-2xl transition-all active:scale-95 hover:border-purple-500/30 block group ${i === 0 ? "sm:col-span-2" : ""}`}>
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 glass">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-white group-hover:text-purple-200 transition-colors">{item.label}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{item.sub}</div>
                    </div>
                    <div className="text-slate-600 group-hover:text-slate-400 transition-colors">›</div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChapterTracker chapterId={id} />
      <Chatbot chapterId={id} />
      <BottomNav />
    </div>
  );
}
