import { Request, Response } from "express";
import { GetEntradaUseCase } from "./GetEntradaUseCase";

export class GetEntradaController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;

    const getEntradasByDate = new GetEntradaUseCase();

    const result = await getEntradasByDate.execute({ id });

    return response.status(201).json(result);
  }
}
