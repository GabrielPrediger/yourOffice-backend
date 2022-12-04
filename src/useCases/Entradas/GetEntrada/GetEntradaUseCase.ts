import { Entrada, Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IGetEntrada } from "./IGetEntrada";

export class GetEntradaUseCase {
  async execute({ id }: IGetEntrada): Promise<Entrada & { produtos: Array<Produto & { quantidadeVenda: number } | null> } | null> {

    const entrada = await prismaClient.entrada.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!entrada) {
      return null
    }

    const produtosEntradas = await prismaClient.entradaProduto.findMany({
      where: {
        entrada_id: Number(id)
      }
    })

    const produtos = await Promise.all(produtosEntradas.map(async (prods: any) => {

      const produto = await prismaClient.produto.findUnique({
        where: {
          id: prods.produto_id
        }
      })

      if (!produto) {
        return null
      }

      return { ...(produto ?? {}), quantidadeVenda: prods.quantidade }

    }

    ))

    return { ...entrada, produtos };
  }
}
