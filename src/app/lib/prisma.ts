// import { PrismaClient } from '@prisma/client';

// let prisma: PrismaClient;

// const globalForPrisma = global as unknown as {
//   prisma: PrismaClient | undefined;
// };

// if (!globalForPrisma.prisma) {
//   globalForPrisma.prisma = new PrismaClient();
// }

// prisma = globalForPrisma.prisma;

// export default prisma;

import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined;
};

// 開発環境では PrismaClient のインスタンスをグローバルで使い回す
const prisma =
  globalForPrisma.prisma ?? (globalForPrisma.prisma = new PrismaClient());

export default prisma;
