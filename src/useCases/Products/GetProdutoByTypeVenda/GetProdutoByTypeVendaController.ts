import { Request, Response } from "express";
import { GetProdutoByTypeVendaUseCase } from "./GetProdutoByTypeVendaUseCase";

export class GetProdutoByTypeController {
  async handle(request: Request, response: Response) {
    const getProdutoByTypeVenda = new GetProdutoByTypeVendaUseCase();

    const result = await getProdutoByTypeVenda.execute();

    return response.status(201).json(result);
  }
}
