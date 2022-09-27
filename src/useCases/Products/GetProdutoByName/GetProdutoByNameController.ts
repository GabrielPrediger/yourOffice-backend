import { Request, Response } from "express";
import { GetProdutoByNameUseCase } from "./GetProdutoByNameUseCase";

export class GetProdutoByNameController {
  async handle(request: Request, response: Response) {
    const getProdutosByName = new GetProdutoByNameUseCase();

    const result = await getProdutosByName.execute();

    return response.status(201).json(result);
  }
}
