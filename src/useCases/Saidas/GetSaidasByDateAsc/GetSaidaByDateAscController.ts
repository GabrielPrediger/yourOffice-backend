import { Request, Response } from "express";
import { GetSaidaByDateAscUseCase } from "./GetSaidaByDateAscUseCase";

export class GetSaidaByDateAscController {
  async handle(request: Request, response: Response) {
    const getSaidaByDateUseCase = new GetSaidaByDateAscUseCase();

    const result = await getSaidaByDateUseCase.execute();

    return response.status(201).json(result);
  }
}
