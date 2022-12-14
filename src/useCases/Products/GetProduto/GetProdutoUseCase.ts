import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IProduct } from "./GetProdutoDTO";

export class GetProdutoUseCase {
  async execute({ id }: IProduct): Promise<Produto | null> {
    const produto = await prismaClient.produto.findUnique({
      where: {
        id: Number(id),
      },
    });

    return produto;
  }
}
