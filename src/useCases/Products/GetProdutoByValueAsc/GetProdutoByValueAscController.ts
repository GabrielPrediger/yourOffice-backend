import { Request, Response } from "express";
import { GetProdutoByValueAscUseCase } from "./GetProdutoByValueAscUseCase";

export class GetProdutoByValueAscController {
  async handle(request: Request, response: Response) {
    const getProdutosByValueAsc = new GetProdutoByValueAscUseCase();

    const result = await getProdutosByValueAsc.execute();

    return response.status(201).json(result);
  }
}
