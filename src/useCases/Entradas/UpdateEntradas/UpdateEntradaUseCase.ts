import { Cliente, Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IEntrada } from "../EntradasDTO";

export class UpdateEntradaUseCase {
  async execute({
    id,
    tipoVenda,
    data,
    descricao,
    valor,
    clienteId,
    produtoId
  }: IEntrada): Promise<Entrada> {
    const updateCliente = await prismaClient.entrada.update({
      where: { id },
      data: {
        tipoVenda,
        data,
        descricao,
        valor,
        clienteId,
        produtoId
      },
    });

    return updateCliente;
  }
}
