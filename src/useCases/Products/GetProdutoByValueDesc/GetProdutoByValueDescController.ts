import { Request, Response } from "express";
import { GetProdutoByValueDescUseCase } from "./GetProdutoByValueDescUseCase";

export class GetProdutoByValueDescController {
  async handle(request: Request, response: Response) {
    const getProdutosByValueDesc = new GetProdutoByValueDescUseCase();

    const result = await getProdutosByValueDesc.execute();

    return response.status(201).json(result);
  }
}
