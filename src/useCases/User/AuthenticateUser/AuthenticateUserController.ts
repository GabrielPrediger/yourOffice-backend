import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { usuario, senha } = request.body;

    const authenticateUserLoginUseCase = new AuthenticateUserUseCase();

    const token = await authenticateUserLoginUseCase.execute({
      usuario, senha
    });

    return response.status(201).json(token);
  }
}
