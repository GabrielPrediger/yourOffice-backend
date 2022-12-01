import { Request, Response } from "express";
import { GetSaidaByDateUseCase } from "./GetSaidaByDateUseCase";

export class GetSaidaByDateController {
  async handle(request: Request, response: Response) {
    const getSaidaByDateUseCase = new GetSaidaByDateUseCase();

    const result = await getSaidaByDateUseCase.execute();

    return response.status(201).json(result);
  }
}
