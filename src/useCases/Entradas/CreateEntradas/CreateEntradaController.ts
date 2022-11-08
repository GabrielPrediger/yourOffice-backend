import { Request, Response } from "express";
import { CreateEntradaUseCase } from "./CreateEntradaUseCase";

export class CreateEntradaController {
  async handle(request: Request, response: Response) {
    const { tipoVenda,
      data,
      descricao,
      valor,
      clienteId,
      produtoId } = request.body;

    const createEntrada = new CreateEntradaUseCase();

    const result = await createEntrada.execute({
      tipoVenda,
      data,
      descricao,
      valor,
      clienteId,
      produtoId
    });
    return response.status(201).json(result);
  }
}
