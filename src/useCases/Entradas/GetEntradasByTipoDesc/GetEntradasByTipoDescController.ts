import { Request, Response } from "express";
import { GetEntradasByTipoDescUseCase } from "./GetEntradasByTipoDescUseCase";

export class GetEntradasByTipoDescController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradasByTipoDescUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
