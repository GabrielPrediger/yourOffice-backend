import { Cliente, Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IEntrada } from "../EntradasDTO";
import { IAtrasado } from "./atrasadoDTO";

export class UpdateIsAtrasadoUseCase {
  async execute({
    id,
    isAtrasado
  }: IAtrasado): Promise<Entrada> {

    const updateCliente = await prismaClient.entrada.update({
      where: { id: Number(id) },
      data: {
        isAtrasado
      }
    });

    return updateCliente
  }
}
