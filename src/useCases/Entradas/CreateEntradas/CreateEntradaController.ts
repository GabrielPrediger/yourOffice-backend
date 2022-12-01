import { Request, Response } from "express";
import { CreateEntradaUseCase } from "./CreateEntradaUseCase";

export class CreateEntradaController {
  async handle(request: Request, response: Response) {
    const { id, tipoVenda,
      data,
      descricao,
      valor,
      clienteId,
      produtoIds
    } = request.body;

    const createEntrada = new CreateEntradaUseCase();

    const result = await createEntrada.execute({
      id,
      tipoVenda,
      data: new Date(data),
      descricao,
      valor: Number(valor),
      clienteId,
      produtoIds
    });


    return response.status(201).json(result);
  }
}
