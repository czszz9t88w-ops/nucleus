import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import BottomNav from "@/components/BottomNav";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import ChapterTracker from "@/components/ChapterTracker";
import ChapterProgress from "@/components/ChapterProgress";
import ChapterMenu from "@/components/ChapterMenu";
import chapters, { getChapterById } from "@/data/curriculum";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

const subColor: Record<string, string> = { maths: "#7C3AED", science: "#06B6D4" };
const subLabel: Record<string, string> = { maths: "Mathematics", science: "Science" };

export default async function ChapterPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const color = subColor[chapter.subject];

  const menuItems = [
    { key: "notes",    icon: "📝", label: "Chapter Notes",             sub: "Key concepts · definitions · summaries",  href: `/chapter/${id}/notes` },
    { key: "snippets", icon: "💡", label: "Snippets",                  sub: "Tap-to-flip term & formula cards",          href: `/chapter/${id}/snippets` },
    { key: "mcq",      icon: "✅", label: "MCQ + Assertion Worksheet", sub: "2 worksheets · 10 questions each",          href: `/chapter/${id}/worksheet/mcq`,
      wsKeys: [`${id}-mcq-0`, `${id}-mcq-1`] },
    { key: "qa",       icon: "✍️", label: "Q&A Worksheet",             sub: "2 worksheets · model answers included",    href: `/chapter/${id}/worksheet/qa`,
      wsKeys: [`${id}-qa-0`, `${id}-qa-1`] },
  ];

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 50% 0%, #0F0820 0%, #06070F 60%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop breadcrumb bar */}
        <div className="hidden md:flex items-center gap-2 px-8 py-3.5 sticky top-0 z-30"
          style={{ background:"rgba(6,7,15,0.92)", backdropFilter:"blur(16px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <Link href="/home" className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Home</Link>
          <span className="text-slate-800 text-xs">/</span>
          <Link href={`/class/${chapter.classNum}`} className="text-slate-600 hover:text-slate-300 text-xs transition-colors">Class {chapter.classNum}</Link>
          <span className="text-slate-800 text-xs">/</span>
          <Link href={`/subject/${chapter.classNum}/${chapter.subject}`} className="text-slate-600 hover:text-slate-300 text-xs transition-colors">
            {subLabel[chapter.subject]}
          </Link>
          <span className="text-slate-800 text-xs">/</span>
          <span className="text-slate-300 text-xs font-semibold truncate max-w-xs">Ch {chapter.num}: {chapter.title}</span>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">

          {/* Mobile header */}
          <div className="md:hidden flex items-start gap-3 mb-5">
            <Link href={`/subject/${chapter.classNum}/${chapter.subject}`}
              className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400 flex-shrink-0 mt-1 text-lg">‹</Link>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-bold uppercase tracking-widest mb-1" style={{ color }}>
                Class {chapter.classNum} · {subLabel[chapter.subject]} · Chapter {chapter.num}
              </div>
              <h1 className="text-xl font-black text-white leading-tight">{chapter.emoji} {chapter.title}</h1>
            </div>
          </div>

          {/* Mobile progress bar */}
          <div className="md:hidden glass-card rounded-xl p-3 mb-5">
            <ChapterProgress chapterId={id} color={color} />
          </div>

          {/* Desktop two-column layout */}
          <div className="md:grid md:grid-cols-3 md:gap-8">

            {/* Left: chapter info card */}
            <div className="hidden md:block">
              <div className="glass-card rounded-2xl p-6 sticky top-24">
                {/* Subject badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4"
                  style={{ background: `${color}18`, color, border: `1px solid ${color}33` }}>
                  {chapter.subject === "maths" ? "🔢" : "🔬"} {subLabel[chapter.subject]}
                </div>

                <div className="text-5xl mb-3">{chapter.emoji}</div>
                <div className="text-xs font-bold text-slate-600 uppercase tracking-wider mb-1">
                  Class {chapter.classNum} · Chapter {chapter.num}
                </div>
                <h1 className="text-lg font-black text-white leading-snug mb-4">{chapter.title}</h1>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {["NCERT 2026","CBSE","Class "+chapter.classNum].map(tag => (
                    <span key={tag} className="glass text-[10px] px-2 py-0.5 rounded-full text-slate-500">{tag}</span>
                  ))}
                </div>

                <div className="divider mb-4" />
                <div className="text-[10px] font-bold text-slate-600 uppercase tracking-wider mb-2">Chapter Progress</div>
                <ChapterProgress chapterId={id} color={color} />
              </div>
            </div>

            {/* Right: activity menu */}
            <div className="md:col-span-2">
              {/* Desktop section label */}
              <div className="hidden md:block mb-4">
                <h2 className="text-[11px] font-bold text-slate-600 uppercase tracking-widest">Study Materials</h2>
              </div>
              <ChapterMenu id={id} color={color} items={menuItems} />

              {/* Tip */}
              <div className="mt-4 glass-card rounded-xl p-4 flex items-start gap-3">
                <span className="text-lg flex-shrink-0">🎯</span>
                <p className="text-xs text-slate-500 leading-relaxed">
                  <strong className="text-slate-400">Recommended order:</strong> Read Notes → Flip Snippets → Attempt MCQ → Practice Q&amp;A
                </p>
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
