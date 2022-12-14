import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetClienteByNameAscUseCase {
  async execute(): Promise<Cliente[]> {
    const cliente = await prismaClient.cliente.findMany({
      orderBy: {
        nome: "asc",
      },
    });

    return cliente;
  }
}
