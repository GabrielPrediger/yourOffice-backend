import { Request, Response } from "express";
import { UpdateSaidaUseCase } from "./UpdateSaidaUseCase";

export class UpdateSaidaController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;
    const { valor, data, descricao } = request.body;

    const updateSaidaController = new UpdateSaidaUseCase();

    const result = await updateSaidaController.execute({
      id,
      valor: Number(valor),
      data: new Date(data),
      descricao,
    });

    return response.status(201).json(result);
  }
}
