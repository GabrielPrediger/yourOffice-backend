import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetClienteByDateDescUseCase {
  async execute(): Promise<Cliente[]> {
    const cliente = await prismaClient.cliente.findMany({
      orderBy: {
        data_nascimento: "desc",
      },
    });

    return cliente;
  }
}
