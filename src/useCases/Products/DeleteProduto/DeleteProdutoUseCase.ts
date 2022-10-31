import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IDeleteProduto } from "./DeleteProdutoDTO";

export class DeleteProdutoUseCase {
  async execute({ id }: IDeleteProduto): Promise<Produto> {
    const deleteSaida = await prismaClient.produto.delete({
      where: { id },
    });

    return deleteSaida;
  }
}
