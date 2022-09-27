import { Request, Response } from "express";
import { DeleteProdutoUseCase } from "./DeleteProdutoUseCase";

export class DeleteProdutoController {
  async handle(request: Request, response: Response) {
    const { id } = request.body;

    const deleteProdutoController = new DeleteProdutoUseCase();

    const result = await deleteProdutoController.execute({
      id,
    });

    return response.status(201).json(result);
  }
}
