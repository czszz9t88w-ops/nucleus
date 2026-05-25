export type Subject = "maths" | "science";
export type ClassNum = 6 | 7 | 8;
export type Difficulty = "elementary" | "advanced";

export interface Chapter {
  id: string;
  classNum: ClassNum;
  subject: Subject;
  num: number;
  title: string;
  emoji: string;
  difficulty: Difficulty;
  videoId?: string;
}

const chapters: Chapter[] = [
  // ── CLASS 6 MATHS ────────────────────────────────────────────
  { id: "6-maths-1",  classNum: 6, subject: "maths", num: 1,  difficulty: "elementary", title: "Patterns in Mathematics",        emoji: "🔢", videoId: "mjSnbPPnFSQ" },
  { id: "6-maths-2",  classNum: 6, subject: "maths", num: 2,  difficulty: "elementary", title: "Lines and Angles",               emoji: "📐", videoId: "NjMDDIRcBMI" },
  { id: "6-maths-3",  classNum: 6, subject: "maths", num: 3,  difficulty: "elementary", title: "Number Play",                    emoji: "🎲", videoId: "3En_SfpFkmo" },
  { id: "6-maths-4",  classNum: 6, subject: "maths", num: 4,  difficulty: "elementary", title: "Data Handling and Presentation", emoji: "📊", videoId: "b80MKUnr0bU" },
  { id: "6-maths-5",  classNum: 6, subject: "maths", num: 5,  difficulty: "elementary", title: "Prime Time",                     emoji: "🔑", videoId: "mIStB5X4U8M" },
  { id: "6-maths-6",  classNum: 6, subject: "maths", num: 6,  difficulty: "elementary", title: "Perimeter and Area",             emoji: "📏", videoId: "AAB0WhSFwHU" },
  { id: "6-maths-7",  classNum: 6, subject: "maths", num: 7,  difficulty: "advanced",   title: "Fractions",                      emoji: "½",  videoId: "FqN-B2MSILY" },
  { id: "6-maths-8",  classNum: 6, subject: "maths", num: 8,  difficulty: "advanced",   title: "Playing with Constructions",     emoji: "✏️", videoId: "XiAoUDfrar0" },
  { id: "6-maths-9",  classNum: 6, subject: "maths", num: 9,  difficulty: "elementary", title: "Symmetry",                       emoji: "🦋", videoId: "6dqLDheYIAw" },
  { id: "6-maths-10", classNum: 6, subject: "maths", num: 10, difficulty: "advanced",   title: "The Other Side of Zero",         emoji: "0️⃣", videoId: "7dn8KFqQ6iY" },

  // ── CLASS 6 SCIENCE ───────────────────────────────────────────
  { id: "6-science-1",  classNum: 6, subject: "science", num: 1,  difficulty: "elementary", title: "The Wonderful World of Science",                  emoji: "🔭", videoId: "9RMHBgGSida" },
  { id: "6-science-2",  classNum: 6, subject: "science", num: 2,  difficulty: "elementary", title: "Diversity in the Living World",                   emoji: "🌿", videoId: "1cBpsyHvDhg" },
  { id: "6-science-3",  classNum: 6, subject: "science", num: 3,  difficulty: "elementary", title: "Mindful Eating: A Path to a Healthy Body",        emoji: "🥗", videoId: "c-4oqAHHQDQ" },
  { id: "6-science-4",  classNum: 6, subject: "science", num: 4,  difficulty: "elementary", title: "Exploring Magnets",                               emoji: "🧲", videoId: "hFAOXdXZ5TM" },
  { id: "6-science-5",  classNum: 6, subject: "science", num: 5,  difficulty: "elementary", title: "Measurement of Length and Motion",                emoji: "📏", videoId: "3AWKMjHJuLk" },
  { id: "6-science-6",  classNum: 6, subject: "science", num: 6,  difficulty: "elementary", title: "Materials Around Us",                             emoji: "🧱", videoId: "b7Dg4yVWDz8" },
  { id: "6-science-7",  classNum: 6, subject: "science", num: 7,  difficulty: "elementary", title: "Temperature and its Measurement",                 emoji: "🌡️", videoId: "L6IcV8LQWZQ" },
  { id: "6-science-8",  classNum: 6, subject: "science", num: 8,  difficulty: "elementary", title: "A Journey through States of Water",               emoji: "💧", videoId: "jJn0VKyCIoI" },
  { id: "6-science-9",  classNum: 6, subject: "science", num: 9,  difficulty: "elementary", title: "Methods of Separation in Everyday Life",          emoji: "🔬", videoId: "5oqfMoB5nkQ" },
  { id: "6-science-10", classNum: 6, subject: "science", num: 10, difficulty: "advanced",   title: "Living Creatures: Exploring their Characteristics", emoji: "🦎", videoId: "J4MBzEYhaBg" },
  { id: "6-science-11", classNum: 6, subject: "science", num: 11, difficulty: "elementary", title: "Nature's Treasures",                              emoji: "🌳", videoId: "" },
  { id: "6-science-12", classNum: 6, subject: "science", num: 12, difficulty: "advanced",   title: "Beyond Earth",                                    emoji: "🚀", videoId: "" },

  // ── CLASS 7 MATHS ────────────────────────────────────────────
  { id: "7-maths-1",  classNum: 7, subject: "maths", num: 1,  difficulty: "elementary", title: "Large Numbers Around Us",              emoji: "🔢", videoId: "" },
  { id: "7-maths-2",  classNum: 7, subject: "maths", num: 2,  difficulty: "elementary", title: "Arithmetic Expressions",               emoji: "🧮", videoId: "" },
  { id: "7-maths-3",  classNum: 7, subject: "maths", num: 3,  difficulty: "elementary", title: "A Peek Beyond the Point",              emoji: "🔍", videoId: "" },
  { id: "7-maths-4",  classNum: 7, subject: "maths", num: 4,  difficulty: "advanced",   title: "Expressions using Letter-Numbers",     emoji: "🔤", videoId: "" },
  { id: "7-maths-5",  classNum: 7, subject: "maths", num: 5,  difficulty: "elementary", title: "Parallel and Intersecting Lines",      emoji: "📐", videoId: "" },
  { id: "7-maths-6",  classNum: 7, subject: "maths", num: 6,  difficulty: "elementary", title: "Number Play",                          emoji: "🎲", videoId: "" },
  { id: "7-maths-7",  classNum: 7, subject: "maths", num: 7,  difficulty: "advanced",   title: "A Tale of Three Intersecting Lines",   emoji: "🔺", videoId: "" },
  { id: "7-maths-8",  classNum: 7, subject: "maths", num: 8,  difficulty: "elementary", title: "Working with Fractions",               emoji: "½",  videoId: "" },
  { id: "7-maths-9",  classNum: 7, subject: "maths", num: 9,  difficulty: "advanced",   title: "Geometric Twins",                      emoji: "🔷", videoId: "" },
  { id: "7-maths-10", classNum: 7, subject: "maths", num: 10, difficulty: "elementary", title: "Operations with Integers",             emoji: "➕", videoId: "" },
  { id: "7-maths-11", classNum: 7, subject: "maths", num: 11, difficulty: "elementary", title: "Finding Common Ground",                emoji: "⚖️", videoId: "" },
  { id: "7-maths-12", classNum: 7, subject: "maths", num: 12, difficulty: "advanced",   title: "Another Peek Beyond the Point",        emoji: "📍", videoId: "" },
  { id: "7-maths-13", classNum: 7, subject: "maths", num: 13, difficulty: "advanced",   title: "Connecting the Dots...",               emoji: "🔗", videoId: "" },
  { id: "7-maths-14", classNum: 7, subject: "maths", num: 14, difficulty: "advanced",   title: "Constructions and Tilings",            emoji: "📐", videoId: "" },
  { id: "7-maths-15", classNum: 7, subject: "maths", num: 15, difficulty: "advanced",   title: "Finding the Unknown",                  emoji: "❓", videoId: "" },

  // ── CLASS 7 SCIENCE ───────────────────────────────────────────
  { id: "7-science-1",  classNum: 7, subject: "science", num: 1,  difficulty: "elementary", title: "Nutrition in Plants",                  emoji: "🌱", videoId: "1cBpsyHvDhg" },
  { id: "7-science-2",  classNum: 7, subject: "science", num: 2,  difficulty: "elementary", title: "Nutrition in Animals",                 emoji: "🍖", videoId: "c-4oqAHHQDQ" },
  { id: "7-science-3",  classNum: 7, subject: "science", num: 3,  difficulty: "elementary", title: "Fibre to Fabric",                      emoji: "🧵", videoId: "b7Dg4yVWDz8" },
  { id: "7-science-4",  classNum: 7, subject: "science", num: 4,  difficulty: "elementary", title: "Heat",                                 emoji: "🔥", videoId: "L6IcV8LQWZQ" },
  { id: "7-science-5",  classNum: 7, subject: "science", num: 5,  difficulty: "advanced",   title: "Acids, Bases and Salts",               emoji: "⚗️", videoId: "3AWKMjHJuLk" },
  { id: "7-science-6",  classNum: 7, subject: "science", num: 6,  difficulty: "advanced",   title: "Physical and Chemical Changes",        emoji: "🔬", videoId: "9RMHBgGSida" },
  { id: "7-science-7",  classNum: 7, subject: "science", num: 7,  difficulty: "elementary", title: "Respiration in Organisms",             emoji: "🫁", videoId: "jJn0VKyCIoI" },
  { id: "7-science-8",  classNum: 7, subject: "science", num: 8,  difficulty: "advanced",   title: "Transportation in Animals and Plants", emoji: "🩸", videoId: "hFAOXdXZ5TM" },
  { id: "7-science-9",  classNum: 7, subject: "science", num: 9,  difficulty: "elementary", title: "Reproduction in Plants",               emoji: "🌸", videoId: "1cBpsyHvDhg" },
  { id: "7-science-10", classNum: 7, subject: "science", num: 10, difficulty: "advanced",   title: "Motion and Time",                      emoji: "⏱️", videoId: "5oqfMoB5nkQ" },
  { id: "7-science-11", classNum: 7, subject: "science", num: 11, difficulty: "advanced",   title: "Electric Current and Its Effects",     emoji: "⚡", videoId: "J4MBzEYhaBg" },
  { id: "7-science-12", classNum: 7, subject: "science", num: 12, difficulty: "advanced",   title: "Light",                                emoji: "💡", videoId: "J4MBzEYhaBg" },
  { id: "7-science-13", classNum: 7, subject: "science", num: 13, difficulty: "elementary", title: "Water: A Precious Resource",           emoji: "💧", videoId: "3AWKMjHJuLk" },

  // ── CLASS 8 MATHS ────────────────────────────────────────────
  { id: "8-maths-1",  classNum: 8, subject: "maths", num: 1,  difficulty: "elementary", title: "A Square and A Cube",                    emoji: "📐", videoId: "" },
  { id: "8-maths-2",  classNum: 8, subject: "maths", num: 2,  difficulty: "elementary", title: "Power Play",                             emoji: "⚡", videoId: "" },
  { id: "8-maths-3",  classNum: 8, subject: "maths", num: 3,  difficulty: "elementary", title: "A Story of Numbers",                     emoji: "📖", videoId: "" },
  { id: "8-maths-4",  classNum: 8, subject: "maths", num: 4,  difficulty: "elementary", title: "Quadrilaterals",                         emoji: "🔷", videoId: "" },
  { id: "8-maths-5",  classNum: 8, subject: "maths", num: 5,  difficulty: "elementary", title: "Number Play",                            emoji: "🎲", videoId: "" },
  { id: "8-maths-6",  classNum: 8, subject: "maths", num: 6,  difficulty: "advanced",   title: "We Distribute, Yet Things Multiply",     emoji: "✖️", videoId: "" },
  { id: "8-maths-7",  classNum: 8, subject: "maths", num: 7,  difficulty: "elementary", title: "Proportional Reasoning-1",               emoji: "⚖️", videoId: "" },
  { id: "8-maths-8",  classNum: 8, subject: "maths", num: 8,  difficulty: "advanced",   title: "Fractions in Disguise",                  emoji: "🎭", videoId: "" },
  { id: "8-maths-9",  classNum: 8, subject: "maths", num: 9,  difficulty: "advanced",   title: "The Baudhayana-Pythagoras Theorem",       emoji: "📐", videoId: "" },
  { id: "8-maths-10", classNum: 8, subject: "maths", num: 10, difficulty: "advanced",   title: "Proportional Reasoning-2",               emoji: "⚖️", videoId: "" },
  { id: "8-maths-11", classNum: 8, subject: "maths", num: 11, difficulty: "advanced",   title: "Exploring Some Geometric Themes",        emoji: "🔺", videoId: "" },
  { id: "8-maths-12", classNum: 8, subject: "maths", num: 12, difficulty: "advanced",   title: "Tales by Dots and Lines",                emoji: "📍", videoId: "" },
  { id: "8-maths-13", classNum: 8, subject: "maths", num: 13, difficulty: "advanced",   title: "Algebra Play",                           emoji: "🔤", videoId: "" },
  { id: "8-maths-14", classNum: 8, subject: "maths", num: 14, difficulty: "elementary", title: "Area",                                   emoji: "📏", videoId: "" },

  // ── CLASS 8 SCIENCE ───────────────────────────────────────────
  { id: "8-science-1",  classNum: 8, subject: "science", num: 1,  difficulty: "elementary", title: "Crop Production and Management",       emoji: "🌾", videoId: "1cBpsyHvDhg" },
  { id: "8-science-2",  classNum: 8, subject: "science", num: 2,  difficulty: "elementary", title: "Microorganisms: Friend and Foe",        emoji: "🦠", videoId: "9RMHBgGSida" },
  { id: "8-science-3",  classNum: 8, subject: "science", num: 3,  difficulty: "elementary", title: "Synthetic Fibres and Plastics",         emoji: "🧵", videoId: "b7Dg4yVWDz8" },
  { id: "8-science-4",  classNum: 8, subject: "science", num: 4,  difficulty: "elementary", title: "Materials: Metals and Non-Metals",      emoji: "⚙️", videoId: "3AWKMjHJuLk" },
  { id: "8-science-5",  classNum: 8, subject: "science", num: 5,  difficulty: "elementary", title: "Coal and Petroleum",                    emoji: "🛢️", videoId: "b7Dg4yVWDz8" },
  { id: "8-science-6",  classNum: 8, subject: "science", num: 6,  difficulty: "advanced",   title: "Combustion and Flame",                  emoji: "🔥", videoId: "L6IcV8LQWZQ" },
  { id: "8-science-7",  classNum: 8, subject: "science", num: 7,  difficulty: "elementary", title: "Conservation of Plants and Animals",    emoji: "🌳", videoId: "b7Dg4yVWDz8" },
  { id: "8-science-8",  classNum: 8, subject: "science", num: 8,  difficulty: "advanced",   title: "Cell — Structure and Functions",        emoji: "🔬", videoId: "9RMHBgGSida" },
  { id: "8-science-9",  classNum: 8, subject: "science", num: 9,  difficulty: "advanced",   title: "Reproduction in Animals",               emoji: "🐣", videoId: "jJn0VKyCIoI" },
  { id: "8-science-10", classNum: 8, subject: "science", num: 10, difficulty: "advanced",   title: "Reaching the Age of Adolescence",       emoji: "🧬", videoId: "c-4oqAHHQDQ" },
  { id: "8-science-11", classNum: 8, subject: "science", num: 11, difficulty: "advanced",   title: "Force and Pressure",                    emoji: "💪", videoId: "5oqfMoB5nkQ" },
  { id: "8-science-12", classNum: 8, subject: "science", num: 12, difficulty: "advanced",   title: "Friction",                              emoji: "🛞", videoId: "5oqfMoB5nkQ" },
  { id: "8-science-13", classNum: 8, subject: "science", num: 13, difficulty: "advanced",   title: "Sound",                                 emoji: "🔊", videoId: "hFAOXdXZ5TM" },
  { id: "8-science-14", classNum: 8, subject: "science", num: 14, difficulty: "advanced",   title: "Chemical Effects of Electric Current",  emoji: "⚡", videoId: "J4MBzEYhaBg" },
  { id: "8-science-15", classNum: 8, subject: "science", num: 15, difficulty: "advanced",   title: "Some Natural Phenomena",                emoji: "⚡", videoId: "hFAOXdXZ5TM" },
  { id: "8-science-16", classNum: 8, subject: "science", num: 16, difficulty: "advanced",   title: "Light",                                 emoji: "💡", videoId: "J4MBzEYhaBg" },
];

export default chapters;

export function getNextChapterId(currentId: string): string | null {
  const idx = chapters.findIndex((c) => c.id === currentId);
  if (idx === -1 || idx >= chapters.length - 1) return null;
  return chapters[idx + 1].id;
}

export function getPrevChapterId(currentId: string): string | null {
  const idx = chapters.findIndex((c) => c.id === currentId);
  if (idx <= 0) return null;
  return chapters[idx - 1].id;
}

export function getChapters(classNum: ClassNum, subject: Subject): Chapter[] {
  return chapters.filter((c) => c.classNum === classNum && c.subject === subject);
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
