import { Request, Response } from "express";
import { GetEntradasByDateDescUseCase } from "./GetEntradasByDateDescUseCase";

export class GetEntradasByDateDescController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByDateDescUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
