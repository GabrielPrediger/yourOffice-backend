import { Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IGetEntrada } from "./IGetEntrada";

export class GetEntradaUseCase {
  async execute({ id }: IGetEntrada): Promise<Entrada | null> {
    const entrada = await prismaClient.entrada.findUnique({
      where: {
        id: Number(id),
      },
    });

    return entrada;
  }
}
