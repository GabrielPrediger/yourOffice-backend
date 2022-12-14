import { Request, Response } from "express";
import { GetEntradasByValorDescUseCase } from "./GetEntradasByValorDescUseCase";

export class GetEntradasByValorDescController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByValorDescUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
