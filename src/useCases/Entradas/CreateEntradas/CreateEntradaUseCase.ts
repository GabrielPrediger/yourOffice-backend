import { Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IEntrada } from "../EntradasDTO";

export class CreateEntradaUseCase {
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

    const quantidades = await Promise.all(produtos.map(async (produto) => {

      const prevProduto = await prismaClient.produto.findUnique({
        where: {
          id: produto.id
        }
      })
      console.log(prevProduto, 'prevProduto');


      if (!prevProduto) {
        throw new AppError("Produto não encontrado", 404);
      }

      return { quantidadeAtual: prevProduto.quantidade, id: produto.id, quantidadePosVenda: prevProduto.quantidade - produto.quantidade }
    }))

    const produtoSemEstoque = quantidades.some((valor) => valor.quantidadePosVenda < 0)

    if (produtoSemEstoque) {
      throw new AppError("Produto sem estoque", 422);
    }
    console.log(quantidades, 'quantidadesasdads');


    await Promise.all(quantidades.map(async (produto) => {
      await prismaClient.produto.update({
        where: { id: Number(produto.id) },
        data: {
          quantidade: produto.quantidadePosVenda
        },
      })
    }))

    try {
      const createEntrada = await prismaClient.entrada.create({
        data: {
          id,
          tipoVenda,
          data: new Date(data),
          descricao,
          valor: Number(valor),
          clienteId,
          data_inicio_aluguel,
          data_fim_aluguel,
        }
      });

      await Promise.all(produtos.map(async (produto) => await prismaClient.entradaProduto.create({
        data: {
          entrada_id: id,
          produto_id: produto.id,
          quantidade: produto.quantidade
        }
      })))

      return createEntrada;

    } catch (Err) {
      await Promise.all(quantidades.map(async (produto) => {
        await prismaClient.produto.update({
          where: { id: Number(produto.id) },
          data: {
            quantidade: produto.quantidadeAtual
          },
        })
      }))

      throw new AppError("Erro ao criar a entrada" + Err, 422);
    }
  }
}
