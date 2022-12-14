import { Request, Response } from "express";
import { DeleteProdutoUseCase } from "./DeleteProdutoUseCase";

export class DeleteProdutoController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;

    const deleteProdutoController = new DeleteProdutoUseCase();

    const result = await deleteProdutoController.execute({
      id,
    });

    return response.status(201).json(result);
  }
}
