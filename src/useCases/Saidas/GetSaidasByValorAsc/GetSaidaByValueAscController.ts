import { Request, Response } from "express";
import { GetSaidaByValueAscUseCase } from "./GetSaidaByValueAscUseCase";

export class GetSaidaByValueAscController {
  async handle(request: Request, response: Response) {
    const getSaidaByValueUseCase = new GetSaidaByValueAscUseCase();

    const result = await getSaidaByValueUseCase.execute();

    return response.status(201).json(result);
  }
}
