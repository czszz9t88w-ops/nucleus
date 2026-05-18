"use client";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "bot";
  text: string;
}

export default function Chatbot({ chapterId }: { chapterId?: string }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hello! 👋 I'm your Nucleus AI tutor. Ask me any doubt about Class 6-8 Maths or Science from the NCERT syllabus!" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function send() {
    if (!input.trim() || loading) return;
    const question = input.trim();
    setInput("");
    setMessages((m) => [...m, { role: "user", text: question }]);
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question, chapterId }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "bot", text: data.reply || "I could not find an answer. Please check your NCERT textbook." }]);
    } catch {
      setMessages((m) => [...m, { role: "bot", text: "Connection error. Please check your internet and try again." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-20 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center text-2xl shadow-lg pulse-glow transition-transform active:scale-90"
        style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
        aria-label="Open AI Tutor"
      >
        {open ? "✕" : "🤖"}
      </button>

      {/* Chat panel */}
      {open && (
        <div
          className="fixed bottom-36 right-4 z-50 w-80 rounded-2xl overflow-hidden shadow-2xl slide-up"
          style={{ border: "1px solid rgba(255,255,255,0.12)", background: "#0D1030" }}
        >
          {/* Header */}
          <div
            className="px-4 py-3 flex items-center gap-2"
            style={{ background: "linear-gradient(135deg, #7C3AED, #06B6D4)" }}
          >
            <span className="text-xl">🤖</span>
            <div>
              <div className="font-bold text-sm text-white">Nucleus AI Tutor</div>
              <div className="text-xs text-white/70">NCERT Class 6-8 • Maths & Science</div>
            </div>
          </div>

          {/* Messages */}
          <div className="h-64 overflow-y-auto p-3 space-y-3">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "text-white rounded-br-sm"
                      : "text-slate-200 rounded-bl-sm"
                  }`}
                  style={{
                    background: m.role === "user"
                      ? "linear-gradient(135deg,#7C3AED,#A855F7)"
                      : "rgba(255,255,255,0.08)",
                  }}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-2xl rounded-bl-sm text-sm" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <span className="animate-pulse">Thinking…</span>
                </div>
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 flex gap-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Ask your doubt…"
              className="flex-1 px-3 py-2 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none"
              style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
            />
            <button
              onClick={send}
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl flex items-center justify-center disabled:opacity-40 transition-transform active:scale-90"
              style={{ background: "linear-gradient(135deg,#7C3AED,#06B6D4)" }}
            >
              ➤
            </button>
          </div>
        </div>
      )}
    </>
  );
}
