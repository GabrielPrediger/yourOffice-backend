import { PrismaClient } from "@prisma/client";

//camada de conexao com o BD
const prismaClient = new PrismaClient();

export { prismaClient };
