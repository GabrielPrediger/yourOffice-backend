import { Cliente, Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IEntrada } from "../EntradasDTO";

export class UpdateEntradaUseCase {
  async execute({
    id,
    tipoVenda,
    data,
    descricao,
    valor,
    clienteId,
    produtoIds
  }: IEntrada): Promise<Entrada> {
    const updateCliente = await prismaClient.entrada.update({
      where: { id: Number(id) },
      data: {
        tipoVenda,
        data: new Date(data),
        descricao,
        valor: Number(valor),
        clienteId
      },
    });

    await prismaClient.entradaProduto.deleteMany({
      where: {
        entrada_id: id
      },
    })

    await Promise.all(produtoIds.map(async value => {
      await prismaClient.entradaProduto.create({
        data: {
          entrada_id: id,
          produto_id: value
        }
      })
    }))

    return updateCliente;
  }
}
