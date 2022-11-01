import { Request, Response } from "express";
import { DeleteClienteUseCase } from "./DeleteClienteUseCase";

export class DeleteClienteController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteClienteController = new DeleteClienteUseCase();

    const result = await deleteClienteController.execute({
      id,
    });

    return response.status(201).json(result);
  }
}
