import { Request, Response } from "express";
import { GetEntradaIsAtrasadoUseCase } from "./GetEntradaIsAtrasadoUseCase";

export class GetEntradaIsAtrasadoController {
  async handle(request: Request, response: Response) {
    const getEntradasByDate = new GetEntradaIsAtrasadoUseCase();

    const result = await getEntradasByDate.execute();

    return response.status(201).json(result);
  }
}
