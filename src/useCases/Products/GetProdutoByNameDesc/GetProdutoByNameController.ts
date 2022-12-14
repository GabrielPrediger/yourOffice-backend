import { Request, Response } from "express";
import { GetProdutoByNameDescUseCase } from "./GetProdutoByNameUseCase";

export class GetProdutoByNameDescController {
  async handle(request: Request, response: Response) {
    const getProdutosByName = new GetProdutoByNameDescUseCase();

    const result = await getProdutosByName.execute();

    return response.status(201).json(result);
  }
}
