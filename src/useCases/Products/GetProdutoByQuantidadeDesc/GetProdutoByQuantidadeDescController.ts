import { Request, Response } from "express";
import { GetProdutoByQuantidadeDescUseCase } from "./GetProdutoByQuantidadeDescUseCase";

export class GetProdutoByQuantidadeDescController {
  async handle(request: Request, response: Response) {
    const getProdutoByQuantidadeDesc = new GetProdutoByQuantidadeDescUseCase();

    const result = await getProdutoByQuantidadeDesc.execute();

    return response.status(201).json(result);
  }
}
