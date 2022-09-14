import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IDeleteSaida } from "./DeleteSaidaDTO";

export class DeleteSaidaUseCase {
  async execute({ id }: IDeleteSaida): Promise<Saida> {
    const deleteSaida = await prismaClient.saida.delete({
      where: { id },
    });

    return deleteSaida;
  }
}
