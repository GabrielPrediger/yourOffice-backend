import { Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IEntrada } from "../EntradasDTO";

export class CreateEntradaUseCase {
  async execute({
    id,
    tipoVenda,
    data,
    descricao,
    valor,
    clienteId,
    produtoIds
  }: IEntrada): Promise<Entrada> {

    const createEntrada = await prismaClient.entrada.create({
      data: {
        id,
        tipoVenda,
        data: new Date(data),
        descricao,
        valor: Number(valor),
        clienteId,
        produtoIds
      }
    });

    const teste = await prismaClient.entradaProduto.create({
      data: {
        entrada_id: id,
        produto_id: produtoIds
      }
    })


    return createEntrada;
  }
}
