import { Entrada, Produto } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IGetEntrada } from "../GetEntrada/IGetEntrada";

export class GetEntradasByDateDescUseCase {
  async execute(): Promise<Array<Entrada & { produtos: Array<Produto & { quantidadeVenda: number } | null> } | null>> {

    const entradas = await prismaClient.entrada.findMany({
      orderBy: {
        data: "desc"
      }
    });

    const produtosEntradas = await Promise.all(entradas.map(async (entrada: any) => {
      const produtos = await prismaClient.entradaProduto.findMany({
        where: {
          entrada_id: entrada.id
        }
      })

      const a = await Promise.all(produtos.map(async (prod: any) => {
        const produto = await prismaClient.produto.findUnique({
          where: {
            id: prod.produto_id
          }
        })

        if (!produto) {
          return null
        }

        return { ...(produto ?? {}), quantidadeVenda: prod.quantidade }
      }))

      return { ...entrada, produtos: a }
    }))

    return produtosEntradas;
  }
}
