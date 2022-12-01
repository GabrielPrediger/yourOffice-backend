import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;
    const { usuario, senha, email, permissao } = request.body;

    const updateUserController = new UpdateUserUseCase();

    const result = await updateUserController.execute({
      id,
      usuario,
      senha,
      email,
      permissao,
    });

    return response.status(201).json(result);
  }
}
