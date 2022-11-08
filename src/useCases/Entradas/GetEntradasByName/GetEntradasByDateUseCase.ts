import { Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetEntradasByDateUseCase {
  async execute(): Promise<Entrada[]> {
    const entrada = await prismaClient.entrada.findMany({
      orderBy: {
        data: "asc",
      },
    });

    return entrada;
  }
}
