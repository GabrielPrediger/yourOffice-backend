import { Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IEntrada } from "./IDeleteEntrada";

export class DeleteEntradaUseCase {
  async execute({ id }: IEntrada): Promise<Entrada> {
    const deleteEntrada = await prismaClient.entrada.delete({
      where: { id: Number(id) },
    });

    return deleteEntrada;
  }
}
