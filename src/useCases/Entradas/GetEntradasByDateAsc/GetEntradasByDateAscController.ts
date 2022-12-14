import { Request, Response } from "express";
import { GetEntradasByDateAscUseCase } from "./GetEntradasByDateAscUseCase";

export class GetEntradasByDateAscController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByDateAscUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
