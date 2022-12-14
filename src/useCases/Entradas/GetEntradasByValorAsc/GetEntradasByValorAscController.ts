import { Request, Response } from "express";
import { GetEntradasByValorAscUseCase } from "./GetEntradasByValorAscUseCase";

export class GetEntradasByValorAscController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByValorAscUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
