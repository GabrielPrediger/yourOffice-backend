import { Cliente, Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IEntrada } from "./UpdateEntradaDTO";
export class UpdateEntradaUseCase {
  async execute({
    id,
    tipoVenda,
    data,
    descricao,
    valor,
    clienteId,
    produtos,
    data_inicio_aluguel,
    data_fim_aluguel,
  }: IEntrada): Promise<Entrada> {

    let quantidades: any[] = []
    let produtosIniciais: any[] = []

    try {

      produtosIniciais = await prismaClient.entradaProduto.findMany({
        where: { entrada_id: Number(id) },
      })

      await prismaClient.entradaProduto.deleteMany({
        where: { entrada_id: Number(id) },
      })

      await Promise.all(produtosIniciais.map(async ({ entrada_id, produto_id, quantidade }) => {

        const produto = await prismaClient.produto.findUnique({
          where: { id: produto_id }
        })

        await prismaClient.produto.update({
          where: { id: produto_id },
          data: {
            quantidade: produto?.quantidade ?? 0 + quantidade
          }
        })
      }))

      quantidades = await Promise.all(produtos.map(async (produto) => {

        const produtoInicial = produtosIniciais.find((p) => p.produto_id === produto.id)

        const prevProduto = await prismaClient.produto.findUnique({
          where: {
            id: produto.id
          }
        })
        if (!prevProduto) {
          throw new AppError("Produto não encontrado", 404);
        }

        const quantidadeProdutoInicial = produtoInicial?.quantidade ?? 0

        return { quantidadeAtual: prevProduto.quantidade, id: produto.id, quantidadePosVenda: quantidadeProdutoInicial + prevProduto.quantidade - produto.quantidadeVenda }
      }))

      const produtoSemEstoque = quantidades.some((valor) => valor.quantidadePosVenda < 0)


      if (produtoSemEstoque) {
        throw new AppError("Produto sem estoque", 422);
      }

      await Promise.all(quantidades.map(async (produto) => {
        await prismaClient.produto.update({
          where: { id: Number(produto.id) },
          data: {
            quantidade: produto.quantidadePosVenda
          },
        })
      }))

      const updateCliente = await prismaClient.entrada.update({
        where: { id: Number(id) },
        data: {
          id: Number(id),
          tipoVenda,
          data: new Date(String(data)),
          descricao,
          valor: Number(valor),
          clienteId,
          data_inicio_aluguel: new Date(String(data_inicio_aluguel)),
          data_fim_aluguel: new Date(String(data_fim_aluguel))
        }
      });

      await Promise.all(produtos.map(async (produto) => await prismaClient.entradaProduto.create({
        data: {
          entrada_id: Number(id),
          produto_id: produto.id,
          quantidade: produto.quantidadeVenda
        }
      })))

      return updateCliente

    } catch (Err) {

      await Promise.all(quantidades.map(async (produto: any) => {
        await prismaClient.produto.update({
          where: { id: Number(produto.id) },
          data: {
            quantidade: produto.quantidadeAtual
          },
        })
      }))

      await Promise.all(produtosIniciais.map(async (produto: any) => {
        await prismaClient.entradaProduto.create({
          data: produto
        })
      }))

      throw new AppError("Erro ao editar a entrada" + Err, 422);
    }

  }
}
