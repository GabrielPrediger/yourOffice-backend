import { Request, Response } from "express";
import { GetEntradasByDateUseCase } from "./GetEntradasByDateUseCase";

export class GetEntradasByDateController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByDateUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
