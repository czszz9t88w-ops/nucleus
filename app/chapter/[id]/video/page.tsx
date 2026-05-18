import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
import chapters, { getChapterById } from "@/data/curriculum";

export function generateStaticParams() {
  return chapters.map((c) => ({ id: c.id }));
}

export default async function VideoPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const chapter = getChapterById(id);
  if (!chapter) return notFound();

  const videoId = chapter.videoId;

  return (
    <div className="relative min-h-screen pb-20 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 px-5 pt-10 pb-4 flex items-center gap-3">
        <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-500 truncate">Class {chapter.classNum} · Chapter {chapter.num}</div>
          <h1 className="text-base font-bold text-white truncate">{chapter.title}</h1>
        </div>
      </div>

      <div className="relative z-10 px-4 mb-6">
        <div className="rounded-2xl overflow-hidden" style={{ aspectRatio: "16/9", background: "#000" }}>
          {videoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&color=white`}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={chapter.title}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-500">
              <span className="text-4xl mb-3">🎬</span>
              <p className="text-sm">Video coming soon</p>
              <p className="text-xs mt-1 text-slate-600">Your teacher is preparing this video</p>
            </div>
          )}
        </div>
      </div>

      <div className="relative z-10 px-5 space-y-3">
        <div className="glass rounded-2xl p-4">
          <h2 className="font-bold text-white mb-1">{chapter.emoji} {chapter.title}</h2>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs glass px-2 py-1 rounded-full text-slate-400">Class {chapter.classNum}</span>
            <span className="text-xs glass px-2 py-1 rounded-full text-slate-400">NCERT 2026</span>
            <span className="text-xs glass px-2 py-1 rounded-full text-slate-400 capitalize">{chapter.subject}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { href: `/chapter/${id}/notes`,          icon: "📝", label: "View Notes" },
            { href: `/chapter/${id}/snippets`,        icon: "💡", label: "Key Terms" },
            { href: `/chapter/${id}/worksheet/mcq`,   icon: "✅", label: "MCQ Practice" },
            { href: `/chapter/${id}/worksheet/qa`,    icon: "✍️", label: "Q&A Practice" },
          ].map((a) => (
            <Link key={a.href} href={a.href}
              className="glass flex items-center gap-2 px-3 py-3 rounded-xl active:scale-95 transition-transform">
              <span>{a.icon}</span>
              <span className="text-sm text-slate-300">{a.label}</span>
            </Link>
          ))}
        </div>
      </div>

      <Chatbot chapterId={id} />
    </div>
  );
}
