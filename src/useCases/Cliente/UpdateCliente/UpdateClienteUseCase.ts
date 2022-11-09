import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { ICliente } from "../ClienteDTO";

export class UpdateClienteUseCase {
  async execute({
    id,
    nome,
    data_nascimento,
    cpf_cnpj,
    rg,
    endereco,
  }: ICliente): Promise<Cliente> {
    const updateCliente = await prismaClient.cliente.update({
      where: { id },
      data: {
        nome,
        data_nascimento: new Date(data_nascimento),
        cpf_cnpj,
        rg,
        endereco,
      },
    });

    return updateCliente;
  }
}
