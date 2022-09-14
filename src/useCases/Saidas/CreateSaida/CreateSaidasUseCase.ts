import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { ICreateSaidas } from "./CreateSaidasDTO";

export class CreateSaidasUseCase {
  async execute({ valor, data, descricao }: ICreateSaidas): Promise<Saida> {
    const createSaida = await prismaClient.saida.create({
      data: {
        valor,
        data: new Date(data),
        descricao,
      },
    });

    return createSaida;
  }
}
