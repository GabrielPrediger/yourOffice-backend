import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetSaidaByDateUseCase {
  async execute(): Promise<Saida[]> {
    const valores = await prismaClient.saida.findMany({
      orderBy: {
        data: "asc",
      },
    });

    return valores;
  }
}
