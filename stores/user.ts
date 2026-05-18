import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  userId: string | null;
  name: string | null;
  class: number | null;
  language: "hi" | "en";
  xpTotal: number;
  level: number;
  streak: { currentDays: number; longestDays: number; shields: number } | null;
  isAuthenticated: boolean;

  setUser: (user: Partial<UserState>) => void;
  setLanguage: (lang: "hi" | "en") => void;
  addXP: (amount: number) => void;
  updateStreak: (streak: UserState["streak"]) => void;
  reset: () => void;
}

const initialState = {
  userId: null,
  name: null,
  class: null,
  language: "hi" as const,
  xpTotal: 0,
  level: 1,
  streak: null,
  isAuthenticated: false,
};

export const useUserStore = create<UserState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setUser: (user) => set((state) => ({ ...state, ...user })),
      setLanguage: (lang) => set({ language: lang }),
      addXP: (amount) =>
        set((state) => {
          const newXP = state.xpTotal + amount;
          const newLevel = Math.floor(newXP / 100) + 1;
          return { xpTotal: newXP, level: newLevel };
        }),
      updateStreak: (streak) => set({ streak }),
      reset: () => set(initialState),
    }),
    {
      name: "edubharat-user",
      partialize: (state) => ({
        userId: state.userId,
        name: state.name,
        class: state.class,
        language: state.language,
        xpTotal: state.xpTotal,
        level: state.level,
        streak: state.streak,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
