import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import Sidebar from "@/components/Sidebar";
import BottomNav from "@/components/BottomNav";
import chapters, { getChapterById } from "@/data/curriculum";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

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
          <span className="text-white text-sm font-semibold">Video Lesson</span>
        </div>

        <div className="px-5 pt-10 md:px-8 md:pt-8">
          {/* Mobile header */}
          <div className="md:hidden flex items-center gap-3 mb-4">
            <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
            <div className="flex-1 min-w-0">
              <div className="text-xs text-slate-500 truncate">Class {chapter.classNum} · Chapter {chapter.num}</div>
              <h1 className="text-base font-bold text-white truncate">{chapter.title}</h1>
            </div>
          </div>

          <div className="md:grid md:grid-cols-3 md:gap-8">
            {/* Video player */}
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden mb-5" style={{ aspectRatio:"16/9", background:"#000" }}>
                {chapter.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${chapter.videoId}?rel=0&modestbranding=1&color=white`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen title={chapter.title}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
                    <span className="text-5xl mb-3">🎬</span>
                    <p className="text-sm">Video coming soon</p>
                    <p className="text-xs mt-1 text-slate-600">Your teacher is preparing this video</p>
                  </div>
                )}
              </div>

              <div className="glass rounded-2xl p-5 mb-4">
                <h2 className="font-bold text-white text-base md:text-lg mb-2">{chapter.emoji} {chapter.title}</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs glass px-2 py-1 rounded-full text-slate-400">Class {chapter.classNum}</span>
                  <span className="text-xs glass px-2 py-1 rounded-full text-slate-400">NCERT 2026</span>
                  <span className="text-xs glass px-2 py-1 rounded-full text-slate-400 capitalize">{chapter.subject}</span>
                </div>
              </div>
            </div>

            {/* Sidebar: quick actions */}
            <div className="space-y-3">
              <h3 className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Continue Learning</h3>
              {[
                { href:`/chapter/${id}/notes`,         icon:"📝", label:"Chapter Notes",  sub:"Summarised notes" },
                { href:`/chapter/${id}/snippets`,       icon:"💡", label:"Snippets",       sub:"Key terms & formulas" },
                { href:`/chapter/${id}/worksheet/mcq`,  icon:"✅", label:"MCQ Practice",   sub:"Test yourself" },
                { href:`/chapter/${id}/worksheet/qa`,   icon:"✍️", label:"Q&A Practice",   sub:"Written answers" },
              ].map(a => (
                <Link key={a.href} href={a.href}
                  className="glass flex items-center gap-3 px-4 py-3 rounded-xl active:scale-95 transition-all hover:border-purple-500/30 block">
                  <span className="text-xl">{a.icon}</span>
                  <div>
                    <div className="text-sm font-semibold text-white">{a.label}</div>
                    <div className="text-xs text-slate-500">{a.sub}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Chatbot chapterId={id} />
      <BottomNav />
    </div>
  );
}
