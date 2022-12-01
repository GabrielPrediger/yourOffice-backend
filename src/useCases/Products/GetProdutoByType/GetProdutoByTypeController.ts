import { Request, Response } from "express";
import { GetProdutoByTypeVendaUseCase } from "./GetProdutoByTypeUseCase";

export class GetProdutoByTypeVendaController {
  async handle(request: Request, response: Response) {
    const getProdutoByType = new GetProdutoByTypeVendaUseCase();

    const result = await getProdutoByType.execute();

    return response.status(201).json(result);
  }
}
