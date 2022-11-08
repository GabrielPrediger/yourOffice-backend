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
    produtoId
  }: IEntrada): Promise<Entrada> {

    const createEntrada = await prismaClient.entrada.create({
      data: {
        tipoVenda,
        data: new Date(data),
        descricao,
        valor,
        clienteId,
        produtoId
      },
    });

    return createEntrada;
  }
}
