import { Request, Response } from "express";
import { GetAuthenticateTokenUseCase } from "./GetAuthenticateTokenUseCase";

export class GetAuthenticateTokenController {
  async handle(request: Request, response: Response) {
    const { token } = request.body;

    const authenticateUserLoginUseCase = new GetAuthenticateTokenUseCase();

    const result = await authenticateUserLoginUseCase.execute({
      token
    });

    return response.status(201).json(result);
  }
}
