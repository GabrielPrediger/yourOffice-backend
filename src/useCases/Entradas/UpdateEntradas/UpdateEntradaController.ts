import { Request, Response } from "express";
import { UpdateEntradaUseCase } from "./UpdateEntradaUseCase";

export class UpdateEntradaController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;
    const { tipoVenda, data, descricao, valor, clienteId, produtoIds } = request.body;

    const updateEntradaController = new UpdateEntradaUseCase();

    const result = await updateEntradaController.execute({
      id,
      tipoVenda,
      data,
      descricao,
      valor,
      clienteId,
      produtoIds
    });

    return response.status(201).json(result);
  }
}
