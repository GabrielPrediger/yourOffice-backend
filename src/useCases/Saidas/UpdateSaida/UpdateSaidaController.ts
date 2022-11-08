import { Request, Response } from "express";
import { UpdateSaidaUseCase } from "./UpdateSaidaUseCase";

export class UpdateSaidaController {
  async handle(request: Request, response: Response) {
    const { id, valor, descricao } = request.body;

    const updateSaidaController = new UpdateSaidaUseCase();

    const result = await updateSaidaController.execute({
      id,
      valor,
      descricao,
    });

    return response.status(201).json(result);
  }
}
