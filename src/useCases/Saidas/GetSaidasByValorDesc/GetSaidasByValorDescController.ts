import { Request, Response } from "express";
import { GetSaidasByValorDescUseCase } from "./GetSaidasByValorDescUseCase";

export class GetSaidasByValorDescController {
  async handle(request: Request, response: Response) {
    const getSaidaByValueUseCase = new GetSaidasByValorDescUseCase();

    const result = await getSaidaByValueUseCase.execute();

    return response.status(201).json(result);
  }
}
