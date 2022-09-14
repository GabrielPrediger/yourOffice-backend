import { Request, Response } from "express";
import { DeleteSaidaUseCase } from "./DeleteSaidaUseCase";

export class DeleteSaidaController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteSaidaController = new DeleteSaidaUseCase();

    const result = await deleteSaidaController.execute({
      id,
    });

    return response.status(201).json(result);
  }
}
