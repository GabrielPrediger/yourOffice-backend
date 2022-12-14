import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetSaidasByDateDescUseCase {
  async execute(): Promise<Saida[]> {
    const valores = await prismaClient.saida.findMany({
      orderBy: {
        data: "desc",
      },
    });

    return valores;
  }
}
