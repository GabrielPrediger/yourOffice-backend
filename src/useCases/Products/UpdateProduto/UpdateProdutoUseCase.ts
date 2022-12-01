import { Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IProduct } from "./UpdateProdutoDTO";

export class UpdateProdutoUseCase {
  async execute({
    id,
    nome,
    descricao,
    quantidade,
    foto,
    tipo,
    preco,
  }: IProduct): Promise<Produto> {

    const updateProduto = await prismaClient.produto.update({
      where: { id: Number(id) },
      data: { nome, descricao, quantidade, foto, tipo, preco },
    });

    return updateProduto;
  }
}
