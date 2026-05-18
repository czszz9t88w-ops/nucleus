export type Language = "hi" | "en";
export type Board = "CBSE" | "ICSE" | "State";
export type Subject = "maths" | "science" | "sst" | "hindi" | "english" | "coding";
export type ContentType = "VIDEO" | "QUIZ" | "SUMMARY" | "PRACTICE";

export interface User {
  id: string;
  phone?: string;
  email?: string;
  name: string;
  class: 6 | 7 | 8;
  board: Board;
  language: Language;
  xpTotal: number;
  level: number;
  streak?: Streak;
}

export interface Streak {
  currentDays: number;
  longestDays: number;
  shields: number;
  lastActive: string;
}

export interface Content {
  id: string;
  title: string;
  titleHi: string;
  subject: Subject;
  class: number;
  chapter: number;
  topic: number;
  type: ContentType;
  videoUrl?: string;
  durationSec?: number;
  xpReward: number;
}

export interface QuizOption {
  textEn: string;
  textHi: string;
}

export interface Quiz {
  id: string;
  contentId: string;
  questionEn: string;
  questionHi: string;
  options: QuizOption[];
  answerIdx: number;
  difficulty: 1 | 2 | 3;
  xpReward: number;
}

export interface Progress {
  contentId: string;
  completed: boolean;
  score?: number;
  xpEarned: number;
  completedAt?: string;
}
