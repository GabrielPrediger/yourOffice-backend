import { Request, Response } from "express";
import { GetSaidasByDateDescUseCase } from "./GetSaidasByDateDescUseCase";

export class GetSaidasByDateDescController {
  async handle(request: Request, response: Response) {
    const getSaidaByDateUseCase = new GetSaidasByDateDescUseCase();

    const result = await getSaidaByDateUseCase.execute();

    return response.status(201).json(result);
  }
}
