"use client";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
        <div>
          <h1 className="font-bold text-lg text-gray-900">नमस्ते! 👋</h1>
          <p className="text-xs text-gray-500">आज का लक्ष्य पूरा करें</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-orange-50 px-3 py-1.5 rounded-full">
            <span>🔥</span>
            <span className="text-sm font-bold text-orange-600">0</span>
          </div>
          <div className="flex items-center gap-1 bg-blue-50 px-3 py-1.5 rounded-full">
            <span>⭐</span>
            <span className="text-sm font-bold" style={{ color: "#1A5F8A" }}>0 XP</span>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        {/* Today's lesson card */}
        <div
          className="rounded-2xl p-4 text-white"
          style={{ background: "linear-gradient(135deg, #1A5F8A, #2E7FB5)" }}
        >
          <p className="text-blue-100 text-xs mb-1">आज का पाठ / Today&apos;s Lesson</p>
          <h2 className="text-lg font-bold mb-3">Knowing Our Numbers</h2>
          <div className="flex items-center justify-between">
            <div className="text-sm text-blue-100">Class 6 · Maths · Chapter 1</div>
            <button
              className="px-4 py-2 rounded-xl font-semibold text-sm text-gray-900 transition-transform active:scale-95"
              style={{ background: "#F5A623" }}
            >
              शुरू करें →
            </button>
          </div>
        </div>

        {/* Subjects grid */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-3">विषय / Subjects</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: "🔢", name: "Maths", nameHi: "गणित", color: "#E3F2FD" },
              { icon: "🔬", name: "Science", nameHi: "विज्ञान", color: "#E8F5E9" },
              { icon: "🌍", name: "SST", nameHi: "सामाजिक", color: "#FFF8E1" },
            ].map((s) => (
              <button
                key={s.name}
                className="rounded-2xl p-4 text-center transition-transform active:scale-95"
                style={{ background: s.color }}
              >
                <div className="text-3xl mb-1">{s.icon}</div>
                <div className="text-xs font-semibold text-gray-800">{s.nameHi}</div>
                <div className="text-xs text-gray-500">{s.name}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Progress placeholder */}
        <div className="bg-white rounded-2xl p-4 border border-gray-100">
          <h3 className="text-sm font-semibold text-gray-700 mb-3">आपकी प्रगति / Your Progress</h3>
          <div className="space-y-3">
            {["Maths", "Science", "SST"].map((s) => (
              <div key={s}>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{s}</span>
                  <span>0%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <div className="h-full w-0 rounded-full" style={{ background: "#1A5F8A" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-6 py-3 flex justify-around safe-bottom">
        {[
          { icon: "🏠", label: "Home", active: true },
          { icon: "📖", label: "Learn", active: false },
          { icon: "🔥", label: "Streak", active: false },
          { icon: "👤", label: "Profile", active: false },
        ].map((item) => (
          <button
            key={item.label}
            className="flex flex-col items-center gap-1"
          >
            <span className="text-xl">{item.icon}</span>
            <span
              className="text-xs font-medium"
              style={{ color: item.active ? "#1A5F8A" : "#9CA3AF" }}
            >
              {item.label}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
}
