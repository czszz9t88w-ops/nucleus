export interface Note {
  heading: string;
  body: string;
  highlight?: string;
}

export interface Snippet {
  term: string;
  definition: string;
  formula?: string;
  example?: string;
}

export interface MCQQuestion {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface QAQuestion {
  q: string;
  a: string;
  type: "short" | "long";
}

export interface ChapterContent {
  notes: Note[];
  snippets: Snippet[];
  mcq: MCQQuestion[][];
  qa: QAQuestion[][];
}

// Content is intentionally empty — add per-chapter JSON files when ready
const allContent: Record<string, ChapterContent> = {};

export function getChapterContent(id: string): ChapterContent | null {
  return allContent[id] ?? null;
}

export function getDefaultContent(_chapterTitle: string): ChapterContent {
  return {
    notes: [],
    snippets: [],
    mcq: [[], []],
    qa: [[], []],
  };
}
