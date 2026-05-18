import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import chapters, { getChapterById } from "@/data/curriculum";
import { getChapterContent, getDefaultContent } from "@/data/content";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

export default async function NotesPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const content = getChapterContent(id) ?? getDefaultContent(chapter.title);

  return (
    <div className="relative min-h-screen pb-24 md:pb-10 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />
      <Sidebar />

      <div className="relative z-10 md:ml-64">
        {/* Desktop top bar */}
        <div className="hidden md:flex items-center gap-3 px-8 py-4 sticky top-0 z-30"
          style={{ background:"rgba(6,7,15,0.85)", backdropFilter:"blur(12px)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
          <Link href={`/chapter/${id}`} className="text-slate-500 hover:text-slate-300 text-sm transition-colors">
            Ch {chapter.num}: {chapter.title}
          </Link>
          <span className="text-slate-700">/</span>
          <span className="text-white text-sm font-semibold">Notes</span>
          <div className="ml-auto glass px-3 py-1 rounded-full text-xs text-slate-400">{content.notes.length} pages</div>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-5">
            <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500">Chapter Notes</div>
              <h1 className="text-base font-bold text-white truncate">{chapter.title}</h1>
            </div>
            <div className="glass px-2 py-1 rounded-full text-xs text-slate-400">{content.notes.length} pages</div>
          </div>

          {/* Desktop heading */}
          <div className="hidden md:block mb-8">
            <h1 className="text-3xl font-black text-white">{chapter.emoji} {chapter.title}</h1>
            <p className="text-slate-500 mt-1 text-sm">Chapter Notes · {content.notes.length} pages</p>
          </div>

          {/* Notes — single col mobile, max-w reading column on desktop */}
          <div className="md:max-w-3xl space-y-4">
            {content.notes.map((note, i) => (
              <div key={i} className="glass rounded-2xl p-5 md:p-7 slide-up" style={{ animationDelay:`${i*0.1}s` }}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                    style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>{i+1}</div>
                  <h2 className="font-bold text-white text-base md:text-lg">{note.heading}</h2>
                </div>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed whitespace-pre-line">{note.body}</p>
                {note.highlight && (
                  <div className="mt-4 rounded-xl p-4 flex items-start gap-3"
                    style={{ background:"rgba(124,58,237,0.15)", border:"1px solid rgba(124,58,237,0.3)" }}>
                    <span className="text-yellow-400 flex-shrink-0 mt-0.5">⭐</span>
                    <p className="text-yellow-200 text-sm font-medium leading-relaxed">{note.highlight}</p>
                  </div>
                )}
              </div>
            ))}

            <div className="grid grid-cols-2 gap-3 pt-2">
              <Link href={`/chapter/${id}/snippets`}
                className="glass flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-slate-300 active:scale-95 transition-transform hover:border-purple-500/30">
                💡 View Snippets
              </Link>
              <Link href={`/chapter/${id}/worksheet/mcq`}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-white active:scale-95 transition-transform hover:opacity-90"
                style={{ background:"linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
                ✅ Practice Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Chatbot chapterId={id} />
      <BottomNav />
    </div>
  );
}
