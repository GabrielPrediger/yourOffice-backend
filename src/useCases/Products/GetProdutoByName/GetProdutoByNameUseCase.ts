import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetProdutoByNameUseCase {
  async execute(): Promise<Produto[]> {
    const produto = await prismaClient.produto.findMany({
      orderBy: {
        nome: "asc",
      },
    });

    return produto;
  }
}
