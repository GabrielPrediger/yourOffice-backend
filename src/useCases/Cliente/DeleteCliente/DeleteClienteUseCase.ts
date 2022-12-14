import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { ICliente } from "../ClienteDTO";

export class DeleteClienteUseCase {
  async execute({ id }: ICliente): Promise<Cliente> {
    const deleteCliente = await prismaClient.cliente.delete({
      where: { id: Number(id) },
    });

    return deleteCliente;
  }
}
