import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IProduct } from "./CreateProdutoDTO";

export class CreateProdutoUseCase {
  async execute({
    id,
    nome,
    descricao,
    quantidade,
    tipo,
    foto,
    preco,
  }: IProduct): Promise<Produto> {
    const productAlreadyExists = await prismaClient.produto.findMany({
      where: { nome },
    });

    if (productAlreadyExists.length) {
      throw new AppError("User Already Exists", 400);
    }

    const createProduto = await prismaClient.produto.create({
      data: { nome, descricao, quantidade, tipo, foto, preco },
    });

    return createProduto;
  }
}
