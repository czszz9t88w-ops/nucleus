"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const PLACEMENT_QUESTIONS = [
  {
    questionHi: "36 का गुणनफल क्या है जब उसे 4 से विभाजित किया जाए?",
    questionEn: "What is 36 divided by 4?",
    options: ["7", "9", "8", "6"],
    answer: 1,
    grade: 5,
    subject: "maths",
  },
  {
    questionHi: "एक त्रिभुज में कितने कोण होते हैं?",
    questionEn: "How many angles does a triangle have?",
    options: ["2", "3", "4", "5"],
    answer: 1,
    grade: 4,
    subject: "maths",
  },
  {
    questionHi: "पानी का रासायनिक सूत्र क्या है?",
    questionEn: "What is the chemical formula of water?",
    options: ["CO2", "H2O", "O2", "NaCl"],
    answer: 1,
    grade: 6,
    subject: "science",
  },
  {
    questionHi: "भारत की राजधानी कौन सी है?",
    questionEn: "What is the capital of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    answer: 2,
    grade: 4,
    subject: "sst",
  },
  {
    questionHi: "सबसे छोटी अभाज्य संख्या कौन सी है?",
    questionEn: "What is the smallest prime number?",
    options: ["1", "2", "3", "0"],
    answer: 1,
    grade: 6,
    subject: "maths",
  },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const question = PLACEMENT_QUESTIONS[currentQ];
  const isLastQuestion = currentQ === PLACEMENT_QUESTIONS.length - 1;

  function handleSelect(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    setTimeout(() => {
      const newAnswers = [...answers, idx];
      if (isLastQuestion) {
        setAnswers(newAnswers);
        setShowResult(true);
      } else {
        setAnswers(newAnswers);
        setCurrentQ((q) => q + 1);
        setSelected(null);
      }
    }, 800);
  }

  const score = answers.filter((a, i) => a === PLACEMENT_QUESTIONS[i]?.answer).length;

  if (showResult) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4"
        style={{ background: "#1A5F8A" }}>
        <div className="bg-white rounded-3xl p-8 text-center max-w-sm w-full">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-2xl font-bold mb-2 text-gray-900">बढ़िया! / Great job!</h2>
          <p className="text-gray-600 mb-2">
            {score}/{PLACEMENT_QUESTIONS.length} सही उत्तर / correct answers
          </p>
          <p className="text-sm text-gray-500 mb-6">
            हमने आपका स्तर तय कर लिया है। पढ़ाई शुरू करते हैं!
          </p>
          <button
            onClick={() => router.push("/dashboard")}
            className="w-full py-4 rounded-2xl font-semibold text-lg text-white transition-transform active:scale-95"
            style={{ background: "#1A5F8A" }}
          >
            पहला पाठ शुरू करें 🚀
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#1A5F8A" }}>
      <div className="p-4 pt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex gap-1 flex-1">
            {PLACEMENT_QUESTIONS.map((_, i) => (
              <div
                key={i}
                className="flex-1 h-1.5 rounded-full"
                style={{
                  background: i <= currentQ ? "#F5A623" : "rgba(255,255,255,0.3)",
                }}
              />
            ))}
          </div>
          <span className="text-white text-sm font-medium">
            {currentQ + 1}/{PLACEMENT_QUESTIONS.length}
          </span>
        </div>
        <p className="text-white/70 text-sm mb-1">स्तर जांच / Placement Quiz</p>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div className="bg-white rounded-t-3xl p-6 pb-10">
          <p className="text-gray-500 text-sm mb-1">{question.questionEn}</p>
          <h3 className="text-xl font-bold text-gray-900 mb-6">{question.questionHi}</h3>
          <div className="space-y-3">
            {question.options.map((opt, i) => {
              const isCorrect = i === question.answer;
              const isSelected = selected === i;
              let bg = "bg-gray-100";
              let textColor = "text-gray-800";
              if (selected !== null) {
                if (isCorrect) { bg = "bg-green-100"; textColor = "text-green-800"; }
                else if (isSelected) { bg = "bg-red-100"; textColor = "text-red-800"; }
              }
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(i)}
                  className={`w-full text-left px-4 py-3 rounded-xl font-medium transition-colors ${bg} ${textColor}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
