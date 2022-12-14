import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetClienteByNameDescUseCase {
  async execute(): Promise<Cliente[]> {
    const cliente = await prismaClient.cliente.findMany({
      orderBy: {
        nome: "desc",
      },
    });

    return cliente;
  }
}
