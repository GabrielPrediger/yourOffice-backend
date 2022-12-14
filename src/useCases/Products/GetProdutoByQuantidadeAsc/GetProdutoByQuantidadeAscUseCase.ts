import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetProdutoByQuantidadeAscUseCase {
  async execute(): Promise<Produto[]> {
    const produto = await prismaClient.produto.findMany({
      orderBy: {
        quantidade: "asc"
      },
    });

    return produto;
  }
}
