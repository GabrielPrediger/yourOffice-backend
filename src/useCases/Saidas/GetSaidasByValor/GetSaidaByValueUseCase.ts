import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetSaidaByValueUseCase {
  async execute(): Promise<Saida[]> {
    const valores = await prismaClient.saida.findMany({
      orderBy: {
        valor: "asc",
      },
    });

    return valores;
  }
}
