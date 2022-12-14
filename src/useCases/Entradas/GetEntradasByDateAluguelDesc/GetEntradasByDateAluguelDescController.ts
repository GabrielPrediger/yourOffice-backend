import { Request, Response } from "express";
import { GetEntradasByDateAluguelDescUseCase } from "./GetEntradasByDateAluguelDescUseCase";

export class GetEntradasByDateAluguelDescController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByDateAluguelDescUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
