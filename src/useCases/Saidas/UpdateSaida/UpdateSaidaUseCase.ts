import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IUpdateSaida } from "./UpdateSaidaDTO";

export class UpdateSaidaUseCase {
  async execute({ id, valor, data, descricao }: IUpdateSaida): Promise<Saida> {
    const saida = await prismaClient.saida.update({
      where: { id: Number(id) },
      data: {
        valor: Number(valor),
        data: new Date(data),
        descricao,
      },
    });

    return saida;
  }
}
