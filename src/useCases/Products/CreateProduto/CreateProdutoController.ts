import { Request, Response } from "express";
import { CreateProdutoUseCase } from "./CreateProdutoUseCase";

export class CreateProdutoController {
  async handle(request: Request, response: Response) {
    const { nome, descricao, quantidade, tipo, foto, preco } = request.body;

    const createProduto = new CreateProdutoUseCase();

    const result = await createProduto.execute({
      nome,
      descricao,
      quantidade: Number(quantidade),
      tipo,
      foto,
      preco: Number(preco),
    });

    return response.status(201).json(result);
  }
}
