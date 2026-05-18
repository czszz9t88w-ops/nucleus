import { prisma } from "@/lib/prisma";

export type StreakUpdateResult = {
  streak: { currentDays: number; longestDays: number; shields: number };
  xpBonus: number;
  message: string;
};

export async function updateStreak(userId: string): Promise<StreakUpdateResult> {
  const existing = await prisma.streak.findUnique({ where: { userId } });
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  if (!existing) {
    const streak = await prisma.streak.create({
      data: { userId, currentDays: 1, longestDays: 1, lastActive: today },
    });
    return { streak, xpBonus: 5, message: "Streak started! +5 XP" };
  }

  const lastActive = new Date(existing.lastActive);
  lastActive.setHours(0, 0, 0, 0);
  const daysDiff = Math.floor((today.getTime() - lastActive.getTime()) / 86400000);

  if (daysDiff === 0) {
    return { streak: existing, xpBonus: 0, message: "Already counted today" };
  }

  if (daysDiff === 1) {
    const newCurrent = existing.currentDays + 1;
    const newLongest = Math.max(newCurrent, existing.longestDays);
    const xpBonus = newCurrent % 7 === 0 ? 50 : newCurrent % 3 === 0 ? 20 : 5;

    const streak = await prisma.streak.update({
      where: { userId },
      data: { currentDays: newCurrent, longestDays: newLongest, lastActive: today },
    });
    return { streak, xpBonus, message: `${newCurrent}-day streak! +${xpBonus} XP` };
  }

  // Missed a day — check shields (grace days)
  if (existing.shields > 0) {
    const streak = await prisma.streak.update({
      where: { userId },
      data: { shields: { decrement: 1 }, lastActive: today },
    });
    return { streak, xpBonus: 0, message: "Shield used! Streak saved." };
  }

  // Streak broken
  const streak = await prisma.streak.update({
    where: { userId },
    data: { currentDays: 1, lastActive: today },
  });
  return { streak, xpBonus: 5, message: "Streak reset. Starting fresh! +5 XP" };
}

export async function awardShield(userId: string): Promise<void> {
  await prisma.streak.update({
    where: { userId },
    data: { shields: { increment: 1 } },
  });
}
