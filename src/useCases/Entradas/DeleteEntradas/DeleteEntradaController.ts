import { Request, Response } from "express";
import { DeleteEntradaUseCase } from "./DeleteEntradaUseCase";

export class DeleteEntradaController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;

    const deleteEntradaController = new DeleteEntradaUseCase();

    const result = await deleteEntradaController.execute({
      id,
    });

    return response.status(201).json(result);
  }
}
