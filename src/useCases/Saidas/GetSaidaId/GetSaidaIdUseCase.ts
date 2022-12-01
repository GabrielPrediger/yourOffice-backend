import { Saida } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IGetUser } from "../../User/GetUserId/GetUserIdDTO";

export class GetSaidaIdUseCase {
  async execute({ id }: IGetUser): Promise<Saida | null> {
    const saida = await prismaClient.saida.findUnique({
      where: {
        id: Number(id),
      },
    });

    return saida;
  }
}
