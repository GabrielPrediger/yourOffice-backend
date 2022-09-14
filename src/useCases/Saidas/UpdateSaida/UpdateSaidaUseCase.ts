import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IUpdateSaida } from "./UpdateSaidaDTO";

export class UpdateSaidaUseCase {
  async execute({ id, valor, descricao }: IUpdateSaida): Promise<Saida> {
    const saida = await prismaClient.saida.update({
      where: { id },
      data: {
        valor,
        descricao,
      },
    });

    return saida;
  }
}
