import { Request, Response } from "express";
import { UpdateProdutoUseCase } from "./UpdateProdutoUseCase";

export class UpdateProdutoController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;
    const { nome, descricao, quantidade, tipo, foto, preco } = request.body;

    const updateProdutoController = new UpdateProdutoUseCase();

    const result = await updateProdutoController.execute({
      id,
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
