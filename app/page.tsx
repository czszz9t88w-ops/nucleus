import Link from "next/link";

export default function Home() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4"
      style={{
        background: "linear-gradient(135deg, #1A5F8A 0%, #2E7FB5 50%, #1A5F8A 100%)",
      }}
    >
      <div className="text-center text-white max-w-md w-full">
        <div className="text-6xl mb-4">📚</div>
        <h1 className="text-4xl font-bold mb-2">EduBharat</h1>
        <p className="text-blue-100 text-lg mb-1">Class 6–8 के लिए स्मार्ट सीखना</p>
        <p className="text-blue-200 text-sm mb-10">
          Bilingual · Offline-first · NEP 2020 aligned
        </p>

        <Link
          href="/login"
          className="block w-full py-4 rounded-2xl font-semibold text-lg text-gray-900 transition-transform active:scale-95"
          style={{ background: "#F5A623" }}
        >
          शुरू करें / Get Started
        </Link>
        <p className="text-blue-200 text-xs mt-3">Free to start · ₹299/month premium</p>

        <div className="mt-12 grid grid-cols-3 gap-3">
          {[
            { icon: "🎯", hi: "स्तर जांच", en: "Placement Quiz" },
            { icon: "🔥", hi: "रोज़ पढ़ें", en: "Daily Streak" },
            { icon: "🏆", hi: "XP कमाएं", en: "XP & Levels" },
          ].map((f) => (
            <div key={f.en} className="bg-white/10 rounded-xl p-3">
              <div className="text-2xl mb-1">{f.icon}</div>
              <div className="text-xs text-blue-100 font-medium">{f.hi}</div>
              <div className="text-xs text-blue-200">{f.en}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
