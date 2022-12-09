import { Request, Response } from "express";
import { GetProdutoByQuantidadeAscUseCase } from "./GetProdutoByQuantidadeAscUseCase";

export class GetProdutoByQuantidadeAscController {
  async handle(request: Request, response: Response) {
    const getProdutosByValueAsc = new GetProdutoByQuantidadeAscUseCase();

    const result = await getProdutosByValueAsc.execute();

    return response.status(201).json(result);
  }
}
