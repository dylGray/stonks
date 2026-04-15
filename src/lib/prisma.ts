/*
*   Next.js server restarts frequently (via Hot Reloading)
*   without this snippet of code, every restart creates a new Prisma instance
*   could lead to "Too many connection" errors
*/

import { PrismaClient } from "@prisma/client";

const prismaClientSignleton = () => {
    return new PrismaClient();
}

declare global {
    var prisma: undefined | ReturnType<typeof prismaClientSignleton>
}

const prisma = globalThis.prisma ?? prismaClientSignleton();

export default prisma;

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;