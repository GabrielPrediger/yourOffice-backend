import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetProdutoByValueDescUseCase {
  async execute(): Promise<Produto[]> {
    const produto = await prismaClient.produto.findMany({
      orderBy: {
        preco: "desc"
      },
    });

    return produto;
  }
}
