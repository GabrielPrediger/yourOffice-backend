import { Request, Response } from "express";
import { AppError } from "../../../errors/AppError";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { usuario, senha, email, permissao } = request.body;

    //chamo o meu User
    const createUserService = new CreateUserUseCase();
    //eu executo
    const result = await createUserService.execute({
      usuario,
      senha,
      email,
      permissao,
    });

    //retorno a informação pro service
    //passando um status
    return response.status(201).json(result);
  }
}
