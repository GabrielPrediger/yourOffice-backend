import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IProduct } from "./CreateProdutoDTO";

export class CreateProdutoUseCase {
  async execute(produto: IProduct): Promise<Produto> {
    const { nome } = produto;
    const productAlreadyExists = await prismaClient.produto.findMany({
      where: { nome },
    });
    if (productAlreadyExists.length) {
      throw new AppError("Produto Already Exists", 400);
    }

    const createProduto = await prismaClient.produto.create({
      data: { ...produto, quantidade: Number(produto.quantidade), preco: Number(produto.preco) },
    });

    return createProduto;
  }
}
