import { Request, Response } from "express";
import { CreateEntradaUseCase } from "./CreateEntradaUseCase";

export class CreateEntradaController {
  async handle(request: Request, response: Response) {
    const { tipoVenda,
      data,
      descricao,
      valor,
      clienteId,
      produtos,
      data_inicio_aluguel,
      data_fim_aluguel,
    } = request.body;

    const createEntrada = new CreateEntradaUseCase();

    const result = await createEntrada.execute({
      tipoVenda,
      data: new Date(data),
      descricao,
      valor: Number(valor),
      clienteId,
      produtos,
      data_inicio_aluguel: new Date(data_inicio_aluguel),
      data_fim_aluguel: new Date(data_fim_aluguel),
    });

    return response.status(201).json(result);
  }
}
