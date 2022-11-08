import { Request, Response } from "express";
import { CreateSaidasUseCase } from "./CreateSaidasUseCase";

export class CreateSaidasController {
  async handle(request: Request, response: Response) {
    const { valor, data, descricao } = request.body;

    const createSaidasService = new CreateSaidasUseCase();

    const result = await createSaidasService.execute({
      valor,
      data,
      descricao,
    });

    return response.status(201).json(result);
  }
}
