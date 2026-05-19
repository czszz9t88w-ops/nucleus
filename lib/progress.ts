export interface ProgressData {
  chaptersVisited: string[];
  worksheetsDone: string[];
  questionsAnswered: number;
  lastVisitDate: string;
  streak: number;
}

const KEY = "nucleus_progress";

const EMPTY: ProgressData = {
  chaptersVisited: [],
  worksheetsDone: [],
  questionsAnswered: 0,
  lastVisitDate: "",
  streak: 0,
};

export function getProgress(): ProgressData {
  try {
    if (typeof window === "undefined") return { ...EMPTY };
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...EMPTY, ...JSON.parse(raw) };
  } catch {}
  return { ...EMPTY };
}

function saveProgress(data: ProgressData) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
}

function touchStreak(data: ProgressData) {
  const today = new Date().toISOString().split("T")[0];
  if (data.lastVisitDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().split("T")[0];
  data.streak = data.lastVisitDate === yesterday ? data.streak + 1 : 1;
  data.lastVisitDate = today;
}

export function markChapterVisited(chapterId: string) {
  const data = getProgress();
  if (data.chaptersVisited.includes(chapterId)) return;
  data.chaptersVisited.push(chapterId);
  touchStreak(data);
  saveProgress(data);
}

export function markWorksheetDone(
  chapterId: string,
  type: "mcq" | "qa",
  sheetIndex: number,
  questionsCount: number,
) {
  const data = getProgress();
  const key = `${chapterId}-${type}-${sheetIndex}`;
  const alreadyDone = data.worksheetsDone.includes(key);
  if (!alreadyDone) {
    data.worksheetsDone.push(key);
    touchStreak(data);
  }
  data.questionsAnswered += questionsCount;
  saveProgress(data);
}
