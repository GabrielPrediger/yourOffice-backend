import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
  async handle(request: Request, response: Response) {
    const { usuario, senha, email, permissao } = request.body;

    //chamo o meu User
    const createUserService = new CreateUserUseCase();

    console.log(createUserService, 'createUserService')
    //eu executo
    const result = await createUserService.execute({
      usuario,
      senha,
      email,
      permissao,
    });
    console.log(result, 'result')

    //retorno a informação pro service
    //passando um status
    return response.status(201).json(result);
  }
}
