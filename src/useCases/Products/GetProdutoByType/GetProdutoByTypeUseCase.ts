import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetProdutoByTypeVendaUseCase {
  async execute(): Promise<Produto[]> {
    const produto = await prismaClient.produto.findMany({
      orderBy: {
        tipo: "asc",
      },
    });

    return produto;
  }
}
