import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetClienteByNameUseCase {
  async execute(): Promise<Cliente[]> {
    const cliente = await prismaClient.cliente.findMany({
      orderBy: {
        nome: "asc",
      },
    });

    return cliente;
  }
}
