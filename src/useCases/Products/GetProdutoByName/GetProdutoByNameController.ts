import { Request, Response } from "express";
import { GetProdutoByNameAscUseCase } from "./GetProdutoByNameUseCase";

export class GetProdutoByNameAscController {
  async handle(request: Request, response: Response) {
    const getProdutosByName = new GetProdutoByNameAscUseCase();

    const result = await getProdutosByName.execute();

    return response.status(201).json(result);
  }
}
