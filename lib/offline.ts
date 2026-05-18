import Dexie, { Table } from "dexie";

interface OfflineProgress {
  id?: number;
  contentId: string;
  userId: string;
  completed: boolean;
  score?: number;
  xpEarned: number;
  syncedAt?: Date;
  createdAt: Date;
}

interface CachedContent {
  id: string;
  title: string;
  titleHi: string;
  subject: string;
  class: number;
  chapter: number;
  type: string;
  cachedAt: Date;
}

class EduBharatDB extends Dexie {
  progress!: Table<OfflineProgress, number>;
  content!: Table<CachedContent, string>;

  constructor() {
    super("edubharat");
    this.version(1).stores({
      progress: "++id, contentId, userId, syncedAt",
      content: "id, subject, class, chapter",
    });
  }
}

export const offlineDB = new EduBharatDB();

export async function saveProgressOffline(data: Omit<OfflineProgress, "id">): Promise<void> {
  await offlineDB.progress.add({ ...data, createdAt: new Date() });
}

export async function syncPendingProgress(): Promise<void> {
  const unsynced = await offlineDB.progress.where("syncedAt").equals("").toArray();
  if (unsynced.length === 0) return;

  try {
    await fetch("/api/progress/sync", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(unsynced),
    });
    const ids = unsynced.map((p) => p.id!);
    await offlineDB.progress.bulkPut(
      unsynced.map((p) => ({ ...p, syncedAt: new Date() }))
    );
  } catch {
    // Will retry on next online event
  }
}
