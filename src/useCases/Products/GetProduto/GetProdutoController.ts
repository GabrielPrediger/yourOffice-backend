import { Request, Response } from "express";
import { GetProdutoUseCase } from "./GetProdutoUseCase";

export class GetProdutoController {
  async handle(request: Request, response: Response) {

    const { id }: any = request.params
    const getProdutosByName = new GetProdutoUseCase();

    const result = await getProdutosByName.execute({ id });

    return response.status(201).json(result);
  }
}
