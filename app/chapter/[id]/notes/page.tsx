import Link from "next/link";
import { notFound } from "next/navigation";
import Stars from "@/components/Stars";
import Chatbot from "@/components/Chatbot";
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
    <div className="relative min-h-screen pb-20 overflow-hidden"
      style={{ background: "radial-gradient(ellipse at top, #0D1030 0%, #06070F 70%)" }}>
      <Stars />

      <div className="relative z-10 px-5 pt-10 pb-4 flex items-center gap-3">
        <Link href={`/chapter/${id}`} className="w-9 h-9 glass rounded-xl flex items-center justify-center text-slate-400">‹</Link>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-slate-500">Chapter Notes</div>
          <h1 className="text-base font-bold text-white truncate">{chapter.title}</h1>
        </div>
        <div className="glass px-2 py-1 rounded-full text-xs text-slate-400">{content.notes.length} pages</div>
      </div>

      <div className="relative z-10 px-5 space-y-4">
        {content.notes.map((note, i) => (
          <div key={i} className="glass rounded-2xl p-5 slide-up" style={{ animationDelay: `${i * 0.1}s` }}>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>{i + 1}</div>
              <h2 className="font-bold text-white text-base">{note.heading}</h2>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed whitespace-pre-line">{note.body}</p>

            {note.highlight && (
              <div className="mt-4 rounded-xl p-3 flex items-start gap-2"
                style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}>
                <span className="text-yellow-400 flex-shrink-0 mt-0.5">⭐</span>
                <p className="text-yellow-200 text-xs font-medium leading-relaxed">{note.highlight}</p>
              </div>
            )}
          </div>
        ))}

        <div className="grid grid-cols-2 gap-3 mt-2">
          <Link href={`/chapter/${id}/snippets`}
            className="glass flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-slate-300 active:scale-95 transition-transform">
            💡 View Snippets
          </Link>
          <Link href={`/chapter/${id}/worksheet/mcq`}
            className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-white active:scale-95 transition-transform"
            style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}>
            ✅ Practice Now
          </Link>
        </div>
      </div>

      <Chatbot chapterId={id} />
    </div>
  );
}
