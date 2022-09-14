import { Request, Response } from "express";
import { GetSaidaByValueUseCase } from "./GetSaidaByValueUseCase";

export class GetSaidaByValueUseCaseController {
  async handle(request: Request, response: Response) {
    const getSaidaByValueUseCase = new GetSaidaByValueUseCase();

    const result = await getSaidaByValueUseCase.execute();

    return response.status(201).json(result);
  }
}
