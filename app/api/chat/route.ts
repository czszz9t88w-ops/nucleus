import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `You are Nucleus AI, a friendly and encouraging tutor for Class 6, 7, and 8 students in India.
You ONLY answer questions related to:
- NCERT Maths (Ganita Prakash) for Classes 6, 7, 8
- NCERT Science (Curiosity) for Classes 6, 7, 8
- CBSE curriculum 2026

Rules:
1. Keep answers simple, clear, and age-appropriate (11-14 year olds)
2. Use examples from daily Indian life when possible
3. If the question is outside NCERT Class 6-8 Maths/Science, say: "I can only help with Class 6-8 Maths and Science from the NCERT syllabus. Please ask your teacher for other topics."
4. Always encourage the student
5. Break complex answers into numbered steps
6. If a formula is needed, present it clearly`;

export async function POST(req: NextRequest) {
  const { message, chapterId } = await req.json();

  if (!message?.trim()) {
    return NextResponse.json({ reply: "Please ask a question." });
  }

  const apiKey = process.env.GEMINI_API_KEY;

  // If no API key, return a helpful fallback
  if (!apiKey) {
    const fallbacks: string[] = [
      `Great question! For this topic, I recommend:\n1. Re-read the relevant section in your NCERT textbook\n2. Check the Chapter Notes in Nucleus\n3. Review the Snippets for key formulas\n4. Ask your teacher in class\n\n(To enable AI answers, add GEMINI_API_KEY to your .env.local file)`,
      `To answer "${message}", refer to your NCERT textbook — the explanation there is very clear. Also check the Chapter Notes section for a summarised version.\n\n(AI tutor needs GEMINI_API_KEY configured)`,
    ];
    return NextResponse.json({ reply: fallbacks[Math.floor(Math.random() * fallbacks.length)] });
  }

  try {
    const context = chapterId ? `\nStudent is currently studying chapter: ${chapterId}` : "";

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: `${SYSTEM_PROMPT}${context}\n\nStudent question: ${message}` }],
            },
          ],
          generationConfig: {
            maxOutputTokens: 512,
            temperature: 0.3,
          },
        }),
      }
    );

    const data = await res.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ??
      "I could not generate an answer. Please check your textbook or ask your teacher.";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Gemini API error:", err);
    return NextResponse.json({ reply: "Connection to AI tutor failed. Please try again or consult your NCERT textbook." });
  }
}
