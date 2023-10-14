import { PrismaClient } from "@prisma/client";

const globalThisPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalThisPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThisPrisma.prisma = prisma;
