import { Cliente, Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IEntrada } from "../EntradasDTO";

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

    const updateCliente = await prismaClient.entrada.update({
      where: { id: Number(id) },
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

    return updateCliente;
  }
}
