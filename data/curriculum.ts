export type Subject = "maths" | "science";
export type ClassNum = 6 | 7 | 8;

export interface Chapter {
  id: string; // e.g. "6-maths-1"
  classNum: ClassNum;
  subject: Subject;
  num: number;
  title: string;
  emoji: string;
  videoId?: string; // YouTube video ID
}

const chapters: Chapter[] = [
  // ── CLASS 6 MATHS (Ganita Prakash 2025) ──────────────────────
  { id: "6-maths-1",  classNum: 6, subject: "maths",   num: 1,  title: "Patterns in Mathematics",        emoji: "🔢", videoId: "mjSnbPPnFSQ" },
  { id: "6-maths-2",  classNum: 6, subject: "maths",   num: 2,  title: "Lines and Angles",               emoji: "📐", videoId: "NjMDDIRcBMI" },
  { id: "6-maths-3",  classNum: 6, subject: "maths",   num: 3,  title: "Number Play",                    emoji: "🎲", videoId: "3En_SfpFkmo" },
  { id: "6-maths-4",  classNum: 6, subject: "maths",   num: 4,  title: "Data Handling and Presentation", emoji: "📊", videoId: "b80MKUnr0bU" },
  { id: "6-maths-5",  classNum: 6, subject: "maths",   num: 5,  title: "Prime Time",                     emoji: "🔑", videoId: "mIStB5X4U8M" },
  { id: "6-maths-6",  classNum: 6, subject: "maths",   num: 6,  title: "Perimeter and Area",             emoji: "📏", videoId: "AAB0WhSFwHU" },
  { id: "6-maths-7",  classNum: 6, subject: "maths",   num: 7,  title: "Fractions",                      emoji: "½",  videoId: "FqN-B2MSILY" },
  { id: "6-maths-8",  classNum: 6, subject: "maths",   num: 8,  title: "Playing with Constructions",     emoji: "✏️", videoId: "XiAoUDfrar0" },
  { id: "6-maths-9",  classNum: 6, subject: "maths",   num: 9,  title: "Symmetry",                       emoji: "🦋", videoId: "6dqLDheYIAw" },
  { id: "6-maths-10", classNum: 6, subject: "maths",   num: 10, title: "The Other Side of Zero",         emoji: "0️⃣", videoId: "7dn8KFqQ6iY" },

  // ── CLASS 6 SCIENCE (Curiosity 2025) ─────────────────────────
  { id: "6-science-1",  classNum: 6, subject: "science", num: 1,  title: "The Wonderful World of Science",         emoji: "🔭", videoId: "9RMHBgGSida" },
  { id: "6-science-2",  classNum: 6, subject: "science", num: 2,  title: "Diversity in the Living World",          emoji: "🌿", videoId: "1cBpsyHvDhg" },
  { id: "6-science-3",  classNum: 6, subject: "science", num: 3,  title: "Mindful Eating: A Path to a Healthy Body", emoji: "🥗", videoId: "c-4oqAHHQDQ" },
  { id: "6-science-4",  classNum: 6, subject: "science", num: 4,  title: "Seeing Without Touching",                emoji: "🧲", videoId: "hFAOXdXZ5TM" },
  { id: "6-science-5",  classNum: 6, subject: "science", num: 5,  title: "A Journey Through States of Matter",     emoji: "💧", videoId: "3AWKMjHJuLk" },
  { id: "6-science-6",  classNum: 6, subject: "science", num: 6,  title: "Nature's Treasure",                      emoji: "🌳", videoId: "b7Dg4yVWDz8" },
  { id: "6-science-7",  classNum: 6, subject: "science", num: 7,  title: "Temperature and its Measurement",        emoji: "🌡️", videoId: "L6IcV8LQWZQ" },
  { id: "6-science-8",  classNum: 6, subject: "science", num: 8,  title: "A Treat for Mosquitoes",                 emoji: "🦟", videoId: "jJn0VKyCIoI" },
  { id: "6-science-9",  classNum: 6, subject: "science", num: 9,  title: "From Mud to Pot",                        emoji: "🏺", videoId: "5oqfMoB5nkQ" },
  { id: "6-science-10", classNum: 6, subject: "science", num: 10, title: "Wonders of Light",                       emoji: "💡", videoId: "J4MBzEYhaBg" },

  // ── CLASS 7 MATHS (Ganita Prakash 2026) ──────────────────────
  { id: "7-maths-1",  classNum: 7, subject: "maths",   num: 1,  title: "Large Numbers Around Us",        emoji: "🔢", videoId: "3En_SfpFkmo" },
  { id: "7-maths-2",  classNum: 7, subject: "maths",   num: 2,  title: "Arithmetic Expressions",         emoji: "🧮", videoId: "mjSnbPPnFSQ" },
  { id: "7-maths-3",  classNum: 7, subject: "maths",   num: 3,  title: "A Peek Beyond the Point",        emoji: ".",  videoId: "FqN-B2MSILY" },
  { id: "7-maths-4",  classNum: 7, subject: "maths",   num: 4,  title: "Expressions using Letter-Numbers", emoji: "🔣", videoId: "7dn8KFqQ6iY" },
  { id: "7-maths-5",  classNum: 7, subject: "maths",   num: 5,  title: "Parallel and Intersecting Lines", emoji: "📐", videoId: "NjMDDIRcBMI" },
  { id: "7-maths-6",  classNum: 7, subject: "maths",   num: 6,  title: "Number Play",                    emoji: "🎲", videoId: "mIStB5X4U8M" },
  { id: "7-maths-7",  classNum: 7, subject: "maths",   num: 7,  title: "A Tale of Three Intersecting Lines", emoji: "🔺", videoId: "XiAoUDfrar0" },
  { id: "7-maths-8",  classNum: 7, subject: "maths",   num: 8,  title: "Working with Fractions",         emoji: "½",  videoId: "FqN-B2MSILY" },
  { id: "7-maths-9",  classNum: 7, subject: "maths",   num: 9,  title: "Geometric Twins",                emoji: "🦋", videoId: "6dqLDheYIAw" },
  { id: "7-maths-10", classNum: 7, subject: "maths",   num: 10, title: "Operations with Integers",       emoji: "➕", videoId: "7dn8KFqQ6iY" },
  { id: "7-maths-11", classNum: 7, subject: "maths",   num: 11, title: "Finding Common Ground",          emoji: "⚖️", videoId: "b80MKUnr0bU" },
  { id: "7-maths-12", classNum: 7, subject: "maths",   num: 12, title: "Another Peek Beyond the Point",  emoji: "🔍", videoId: "FqN-B2MSILY" },
  { id: "7-maths-13", classNum: 7, subject: "maths",   num: 13, title: "Connecting the Dots...",         emoji: "🔗", videoId: "b80MKUnr0bU" },
  { id: "7-maths-14", classNum: 7, subject: "maths",   num: 14, title: "Constructions and Tilings",      emoji: "✏️", videoId: "XiAoUDfrar0" },
  { id: "7-maths-15", classNum: 7, subject: "maths",   num: 15, title: "Finding the Unknown",            emoji: "❓", videoId: "mjSnbPPnFSQ" },

  // ── CLASS 7 SCIENCE (Curiosity 2026) ─────────────────────────
  { id: "7-science-1",  classNum: 7, subject: "science", num: 1,  title: "The Ever-Evolving World of Science",     emoji: "🔭", videoId: "9RMHBgGSida" },
  { id: "7-science-2",  classNum: 7, subject: "science", num: 2,  title: "Exploring Substances: Acidic, Basic, and Neutral", emoji: "⚗️", videoId: "3AWKMjHJuLk" },
  { id: "7-science-3",  classNum: 7, subject: "science", num: 3,  title: "Electricity: Circuits and their Components", emoji: "⚡", videoId: "J4MBzEYhaBg" },
  { id: "7-science-4",  classNum: 7, subject: "science", num: 4,  title: "The World of Metals and Non-metals",     emoji: "⚙️", videoId: "3AWKMjHJuLk" },
  { id: "7-science-5",  classNum: 7, subject: "science", num: 5,  title: "Changes Around Us: Physical and Chemical", emoji: "🔬", videoId: "9RMHBgGSida" },
  { id: "7-science-6",  classNum: 7, subject: "science", num: 6,  title: "Adolescence: A Stage of Growth and Change", emoji: "🧬", videoId: "c-4oqAHHQDQ" },
  { id: "7-science-7",  classNum: 7, subject: "science", num: 7,  title: "Heat Transfer in Nature",                emoji: "🌡️", videoId: "L6IcV8LQWZQ" },
  { id: "7-science-8",  classNum: 7, subject: "science", num: 8,  title: "Measurement of Time and Motion",         emoji: "⏱️", videoId: "5oqfMoB5nkQ" },
  { id: "7-science-9",  classNum: 7, subject: "science", num: 9,  title: "Life Processes in Animals",              emoji: "🐾", videoId: "jJn0VKyCIoI" },
  { id: "7-science-10", classNum: 7, subject: "science", num: 10, title: "Life Processes in Plants",               emoji: "🌱", videoId: "1cBpsyHvDhg" },
  { id: "7-science-11", classNum: 7, subject: "science", num: 11, title: "Light: Shadows and Reflections",         emoji: "💡", videoId: "J4MBzEYhaBg" },
  { id: "7-science-12", classNum: 7, subject: "science", num: 12, title: "Earth, Moon, and the Sun",               emoji: "🌍", videoId: "hFAOXdXZ5TM" },

  // ── CLASS 8 MATHS (Ganita Prakash 2026) ──────────────────────
  { id: "8-maths-1",  classNum: 8, subject: "maths",   num: 1,  title: "A Square and A Cube",                    emoji: "🟦", videoId: "3En_SfpFkmo" },
  { id: "8-maths-2",  classNum: 8, subject: "maths",   num: 2,  title: "Power Play",                             emoji: "⚡", videoId: "mjSnbPPnFSQ" },
  { id: "8-maths-3",  classNum: 8, subject: "maths",   num: 3,  title: "A Story of Numbers",                     emoji: "🔢", videoId: "7dn8KFqQ6iY" },
  { id: "8-maths-4",  classNum: 8, subject: "maths",   num: 4,  title: "Quadrilaterals",                         emoji: "🔷", videoId: "NjMDDIRcBMI" },
  { id: "8-maths-5",  classNum: 8, subject: "maths",   num: 5,  title: "Number Play",                            emoji: "🎲", videoId: "mIStB5X4U8M" },
  { id: "8-maths-6",  classNum: 8, subject: "maths",   num: 6,  title: "We Distribute, Yet Things Multiply",     emoji: "✖️", videoId: "FqN-B2MSILY" },
  { id: "8-maths-7",  classNum: 8, subject: "maths",   num: 7,  title: "Proportional Reasoning-1",               emoji: "⚖️", videoId: "b80MKUnr0bU" },
  { id: "8-maths-8",  classNum: 8, subject: "maths",   num: 8,  title: "Fractions in Disguise",                  emoji: "½",  videoId: "FqN-B2MSILY" },
  { id: "8-maths-9",  classNum: 8, subject: "maths",   num: 9,  title: "The Baudhayana-Pythagoras Theorem",      emoji: "📐", videoId: "XiAoUDfrar0" },
  { id: "8-maths-10", classNum: 8, subject: "maths",   num: 10, title: "Proportional Reasoning-2",               emoji: "⚖️", videoId: "b80MKUnr0bU" },
  { id: "8-maths-11", classNum: 8, subject: "maths",   num: 11, title: "Exploring Some Geometric Themes",        emoji: "🔺", videoId: "6dqLDheYIAw" },
  { id: "8-maths-12", classNum: 8, subject: "maths",   num: 12, title: "Tales by Dots and Lines",                emoji: "📊", videoId: "b80MKUnr0bU" },
  { id: "8-maths-13", classNum: 8, subject: "maths",   num: 13, title: "Algebra Play",                           emoji: "🔣", videoId: "mjSnbPPnFSQ" },
  { id: "8-maths-14", classNum: 8, subject: "maths",   num: 14, title: "Area",                                   emoji: "📏", videoId: "AAB0WhSFwHU" },

  // ── CLASS 8 SCIENCE (Curiosity 2026) ─────────────────────────
  { id: "8-science-1",  classNum: 8, subject: "science", num: 1,  title: "Exploring the Investigative World of Science",          emoji: "🔭", videoId: "9RMHBgGSida" },
  { id: "8-science-2",  classNum: 8, subject: "science", num: 2,  title: "The Invisible Living World: Beyond Our Naked Eye",      emoji: "🦠", videoId: "1cBpsyHvDhg" },
  { id: "8-science-3",  classNum: 8, subject: "science", num: 3,  title: "Health: The Ultimate Treasure",                        emoji: "🏥", videoId: "c-4oqAHHQDQ" },
  { id: "8-science-4",  classNum: 8, subject: "science", num: 4,  title: "Electricity: Magnetic and Heating Effects",            emoji: "⚡", videoId: "J4MBzEYhaBg" },
  { id: "8-science-5",  classNum: 8, subject: "science", num: 5,  title: "Exploring Forces",                                     emoji: "💪", videoId: "5oqfMoB5nkQ" },
  { id: "8-science-6",  classNum: 8, subject: "science", num: 6,  title: "Pressure, Winds, Storms, and Cyclones",                emoji: "🌪️", videoId: "hFAOXdXZ5TM" },
  { id: "8-science-7",  classNum: 8, subject: "science", num: 7,  title: "Particulate Nature of Matter",                         emoji: "⚗️", videoId: "3AWKMjHJuLk" },
  { id: "8-science-8",  classNum: 8, subject: "science", num: 8,  title: "Nature of Matter: Elements, Compounds, and Mixtures",  emoji: "🔬", videoId: "9RMHBgGSida" },
  { id: "8-science-9",  classNum: 8, subject: "science", num: 9,  title: "The Amazing World of Solutes, Solvents, and Solutions", emoji: "🧪", videoId: "3AWKMjHJuLk" },
  { id: "8-science-10", classNum: 8, subject: "science", num: 10, title: "Light: Mirrors and Lenses",                            emoji: "💡", videoId: "J4MBzEYhaBg" },
  { id: "8-science-11", classNum: 8, subject: "science", num: 11, title: "Keeping Time with the Skies",                          emoji: "🌙", videoId: "hFAOXdXZ5TM" },
  { id: "8-science-12", classNum: 8, subject: "science", num: 12, title: "How Nature Works in Harmony",                          emoji: "🌳", videoId: "b7Dg4yVWDz8" },
  { id: "8-science-13", classNum: 8, subject: "science", num: 13, title: "Our Home: Earth, a Unique Life Sustaining Planet",     emoji: "🌍", videoId: "b7Dg4yVWDz8" },
];

export default chapters;

export function getChapters(classNum: ClassNum, subject: Subject): Chapter[] {
  return chapters.filter((c) => c.classNum === classNum && c.subject === subject);
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
