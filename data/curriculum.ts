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
  { id: "7-maths-2",  classNum: 7, subject: "maths",   num: 2,  title: "Fractions and Decimals",         emoji: "½",  videoId: "FqN-B2MSILY" },
  { id: "7-maths-3",  classNum: 7, subject: "maths",   num: 3,  title: "Playing with Numbers",           emoji: "🎲", videoId: "mIStB5X4U8M" },
  { id: "7-maths-4",  classNum: 7, subject: "maths",   num: 4,  title: "Ratio and Proportion",           emoji: "⚖️", videoId: "b80MKUnr0bU" },
  { id: "7-maths-5",  classNum: 7, subject: "maths",   num: 5,  title: "Simple Equations",               emoji: "🧮", videoId: "7dn8KFqQ6iY" },
  { id: "7-maths-6",  classNum: 7, subject: "maths",   num: 6,  title: "Lines and Angles",               emoji: "📐", videoId: "NjMDDIRcBMI" },
  { id: "7-maths-7",  classNum: 7, subject: "maths",   num: 7,  title: "The Triangle and Its Properties", emoji: "🔺", videoId: "XiAoUDfrar0" },
  { id: "7-maths-8",  classNum: 7, subject: "maths",   num: 8,  title: "Congruence of Triangles",        emoji: "≅",  videoId: "6dqLDheYIAw" },
  { id: "7-maths-9",  classNum: 7, subject: "maths",   num: 9,  title: "Data Handling",                  emoji: "📊", videoId: "b80MKUnr0bU" },
  { id: "7-maths-10", classNum: 7, subject: "maths",   num: 10, title: "Perimeter and Area",             emoji: "📏", videoId: "AAB0WhSFwHU" },
  { id: "7-maths-11", classNum: 7, subject: "maths",   num: 11, title: "Exponents and Powers",           emoji: "⚡", videoId: "mjSnbPPnFSQ" },
  { id: "7-maths-12", classNum: 7, subject: "maths",   num: 12, title: "Symmetry",                       emoji: "🦋", videoId: "6dqLDheYIAw" },
  { id: "7-maths-13", classNum: 7, subject: "maths",   num: 13, title: "Visualising Solid Shapes",       emoji: "🎲", videoId: "XiAoUDfrar0" },

  // ── CLASS 7 SCIENCE (Curiosity 2026) ─────────────────────────
  { id: "7-science-1",  classNum: 7, subject: "science", num: 1,  title: "Nutrition in Plants",                    emoji: "🌱", videoId: "1cBpsyHvDhg" },
  { id: "7-science-2",  classNum: 7, subject: "science", num: 2,  title: "Nutrition in Animals",                   emoji: "🍖", videoId: "c-4oqAHHQDQ" },
  { id: "7-science-3",  classNum: 7, subject: "science", num: 3,  title: "Fibre to Fabric",                        emoji: "🧵", videoId: "b7Dg4yVWDz8" },
  { id: "7-science-4",  classNum: 7, subject: "science", num: 4,  title: "Heat",                                   emoji: "🔥", videoId: "L6IcV8LQWZQ" },
  { id: "7-science-5",  classNum: 7, subject: "science", num: 5,  title: "Acids, Bases and Salts",                 emoji: "⚗️", videoId: "3AWKMjHJuLk" },
  { id: "7-science-6",  classNum: 7, subject: "science", num: 6,  title: "Physical and Chemical Changes",          emoji: "🔬", videoId: "9RMHBgGSida" },
  { id: "7-science-7",  classNum: 7, subject: "science", num: 7,  title: "Respiration in Organisms",               emoji: "🫁", videoId: "jJn0VKyCIoI" },
  { id: "7-science-8",  classNum: 7, subject: "science", num: 8,  title: "Transportation in Animals and Plants",   emoji: "🩸", videoId: "hFAOXdXZ5TM" },
  { id: "7-science-9",  classNum: 7, subject: "science", num: 9,  title: "Reproduction in Plants",                 emoji: "🌸", videoId: "1cBpsyHvDhg" },
  { id: "7-science-10", classNum: 7, subject: "science", num: 10, title: "Motion and Time",                        emoji: "⏱️", videoId: "5oqfMoB5nkQ" },
  { id: "7-science-11", classNum: 7, subject: "science", num: 11, title: "Electric Current and Its Effects",       emoji: "⚡", videoId: "J4MBzEYhaBg" },
  { id: "7-science-12", classNum: 7, subject: "science", num: 12, title: "Light",                                  emoji: "💡", videoId: "J4MBzEYhaBg" },
  { id: "7-science-13", classNum: 7, subject: "science", num: 13, title: "Water: A Precious Resource",             emoji: "💧", videoId: "3AWKMjHJuLk" },

  // ── CLASS 8 MATHS (Ganita Prakash 2026) ──────────────────────
  { id: "8-maths-1",  classNum: 8, subject: "maths",   num: 1,  title: "Rational Numbers",                  emoji: "🔢", videoId: "7dn8KFqQ6iY" },
  { id: "8-maths-2",  classNum: 8, subject: "maths",   num: 2,  title: "Linear Equations in One Variable",  emoji: "🧮", videoId: "mjSnbPPnFSQ" },
  { id: "8-maths-3",  classNum: 8, subject: "maths",   num: 3,  title: "Understanding Quadrilaterals",       emoji: "🔷", videoId: "NjMDDIRcBMI" },
  { id: "8-maths-4",  classNum: 8, subject: "maths",   num: 4,  title: "Practical Geometry",                 emoji: "📐", videoId: "XiAoUDfrar0" },
  { id: "8-maths-5",  classNum: 8, subject: "maths",   num: 5,  title: "Data Handling",                      emoji: "📊", videoId: "b80MKUnr0bU" },
  { id: "8-maths-6",  classNum: 8, subject: "maths",   num: 6,  title: "Squares and Square Roots",           emoji: "√",  videoId: "3En_SfpFkmo" },
  { id: "8-maths-7",  classNum: 8, subject: "maths",   num: 7,  title: "Cubes and Cube Roots",               emoji: "³√", videoId: "mIStB5X4U8M" },
  { id: "8-maths-8",  classNum: 8, subject: "maths",   num: 8,  title: "Comparing Quantities",               emoji: "%",  videoId: "b80MKUnr0bU" },
  { id: "8-maths-9",  classNum: 8, subject: "maths",   num: 9,  title: "Algebraic Expressions and Identities", emoji: "🔣", videoId: "FqN-B2MSILY" },
  { id: "8-maths-10", classNum: 8, subject: "maths",   num: 10, title: "Visualising Solid Shapes",           emoji: "🎲", videoId: "XiAoUDfrar0" },
  { id: "8-maths-11", classNum: 8, subject: "maths",   num: 11, title: "Mensuration",                        emoji: "📏", videoId: "AAB0WhSFwHU" },
  { id: "8-maths-12", classNum: 8, subject: "maths",   num: 12, title: "Exponents and Powers",               emoji: "⚡", videoId: "mjSnbPPnFSQ" },
  { id: "8-maths-13", classNum: 8, subject: "maths",   num: 13, title: "Direct and Inverse Proportions",     emoji: "⚖️", videoId: "b80MKUnr0bU" },
  { id: "8-maths-14", classNum: 8, subject: "maths",   num: 14, title: "Factorisation",                      emoji: "✖️", videoId: "7dn8KFqQ6iY" },
  { id: "8-maths-15", classNum: 8, subject: "maths",   num: 15, title: "Introduction to Graphs",             emoji: "📈", videoId: "b80MKUnr0bU" },
  { id: "8-maths-16", classNum: 8, subject: "maths",   num: 16, title: "Playing with Numbers",               emoji: "🎲", videoId: "mIStB5X4U8M" },

  // ── CLASS 8 SCIENCE (Curiosity 2026) ─────────────────────────
  { id: "8-science-1",  classNum: 8, subject: "science", num: 1,  title: "Crop Production and Management",         emoji: "🌾", videoId: "1cBpsyHvDhg" },
  { id: "8-science-2",  classNum: 8, subject: "science", num: 2,  title: "Microorganisms: Friend and Foe",         emoji: "🦠", videoId: "9RMHBgGSida" },
  { id: "8-science-3",  classNum: 8, subject: "science", num: 3,  title: "Synthetic Fibres and Plastics",          emoji: "🧵", videoId: "b7Dg4yVWDz8" },
  { id: "8-science-4",  classNum: 8, subject: "science", num: 4,  title: "Materials: Metals and Non-Metals",       emoji: "⚙️", videoId: "3AWKMjHJuLk" },
  { id: "8-science-5",  classNum: 8, subject: "science", num: 5,  title: "Coal and Petroleum",                     emoji: "🛢️", videoId: "b7Dg4yVWDz8" },
  { id: "8-science-6",  classNum: 8, subject: "science", num: 6,  title: "Combustion and Flame",                   emoji: "🔥", videoId: "L6IcV8LQWZQ" },
  { id: "8-science-7",  classNum: 8, subject: "science", num: 7,  title: "Conservation of Plants and Animals",     emoji: "🌳", videoId: "b7Dg4yVWDz8" },
  { id: "8-science-8",  classNum: 8, subject: "science", num: 8,  title: "Cell — Structure and Functions",         emoji: "🔬", videoId: "9RMHBgGSida" },
  { id: "8-science-9",  classNum: 8, subject: "science", num: 9,  title: "Reproduction in Animals",               emoji: "🐣", videoId: "jJn0VKyCIoI" },
  { id: "8-science-10", classNum: 8, subject: "science", num: 10, title: "Reaching the Age of Adolescence",        emoji: "🧬", videoId: "c-4oqAHHQDQ" },
  { id: "8-science-11", classNum: 8, subject: "science", num: 11, title: "Force and Pressure",                     emoji: "💪", videoId: "5oqfMoB5nkQ" },
  { id: "8-science-12", classNum: 8, subject: "science", num: 12, title: "Friction",                               emoji: "🛞", videoId: "5oqfMoB5nkQ" },
  { id: "8-science-13", classNum: 8, subject: "science", num: 13, title: "Sound",                                  emoji: "🔊", videoId: "hFAOXdXZ5TM" },
  { id: "8-science-14", classNum: 8, subject: "science", num: 14, title: "Chemical Effects of Electric Current",   emoji: "⚡", videoId: "J4MBzEYhaBg" },
  { id: "8-science-15", classNum: 8, subject: "science", num: 15, title: "Some Natural Phenomena",                 emoji: "⚡", videoId: "hFAOXdXZ5TM" },
  { id: "8-science-16", classNum: 8, subject: "science", num: 16, title: "Light",                                  emoji: "💡", videoId: "J4MBzEYhaBg" },
];

export default chapters;

export function getChapters(classNum: ClassNum, subject: Subject): Chapter[] {
  return chapters.filter((c) => c.classNum === classNum && c.subject === subject);
}

export function getChapterById(id: string): Chapter | undefined {
  return chapters.find((c) => c.id === id);
}
