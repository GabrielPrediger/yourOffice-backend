import { Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IEntrada } from "../EntradasDTO";

export class DeleteEntradaUseCase {
  async execute({ id }: IEntrada): Promise<Entrada> {
    const deleteEntrada = await prismaClient.entrada.delete({
      where: { id },
    });

    return deleteEntrada;
  }
}
