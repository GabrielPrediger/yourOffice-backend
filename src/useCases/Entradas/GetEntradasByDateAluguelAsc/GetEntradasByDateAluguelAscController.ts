import { Request, Response } from "express";
import { GetEntradasByDateAluguelAscUseCase } from "./GetEntradasByDateAluguelAscUseCase";

export class GetEntradasByDateAluguelAscController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByDateAluguelAscUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
