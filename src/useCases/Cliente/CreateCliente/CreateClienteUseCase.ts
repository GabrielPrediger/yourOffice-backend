import { Cliente } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { ICliente } from "./ClienteDTO";

export class CreateClienteUseCase {
  async execute({
    id,
    nome,
    data_nascimento,
    cpf_cnpj,
    rg,
    endereco,
  }: ICliente): Promise<Cliente> {

    const clientAlreadyExists = await prismaClient.cliente.findMany({
      where: { nome },
    });
    const cpfOrCnpjAlreadyExists = await prismaClient.cliente.findMany({
      where: { cpf_cnpj },
    });
    const rgAlreadyExists = await prismaClient.cliente.findMany({
      where: { rg },
    });

    if (clientAlreadyExists.length) {
      throw new AppError("Cliente já existente", 400);
    } else if (cpfOrCnpjAlreadyExists.length) {
      throw new AppError("Cpf ou Cnpj já existente", 400);
    } else if (rgAlreadyExists.length) {
      throw new AppError("Rg já existente", 400);
    }

    const createCliente = await prismaClient.cliente.create({
      data: {
        nome,
        data_nascimento: new Date(data_nascimento),
        cpf_cnpj,
        rg,
        endereco,
      },
    });

    return createCliente;
  }
}
