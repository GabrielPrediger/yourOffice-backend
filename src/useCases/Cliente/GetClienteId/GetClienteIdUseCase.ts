import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { ICliente } from "../ClienteDTO";

export class GetClienteIdUseCase {
  async execute({ id }: ICliente): Promise<Cliente | null> {
    const cliente = await prismaClient.cliente.findUnique({
      where: {
        id: Number(id),
      },
    });

    return cliente;
  }
}
