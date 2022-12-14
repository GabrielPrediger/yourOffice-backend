import { Request, Response } from "express";
import { GetEntradasByTipoAscUseCase } from "./GetEntradasByTipoAscUseCase";

export class GetEntradasByTipoAscController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByTipoAscUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
