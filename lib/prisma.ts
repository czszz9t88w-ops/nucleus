import { PrismaClient } from "@/app/generated/prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

function createPrismaClient(): PrismaClient {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL environment variable is required");
  return new PrismaClient({ accelerateUrl: databaseUrl });
}

let _prisma: PrismaClient | undefined;

export function getPrisma(): PrismaClient {
  if (globalForPrisma.prisma) return globalForPrisma.prisma;
  if (!_prisma) _prisma = createPrismaClient();
  if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = _prisma;
  return _prisma;
}

// Keep named export for existing imports — lazily evaluated
export const prisma = new Proxy({} as PrismaClient, {
  get(_target, prop) {
    return (getPrisma() as unknown as Record<string | symbol, unknown>)[prop];
  },
});
