import { Request, Response } from "express";
import { GetUserByNameUseCase } from "./GetUserByNameUseCase";

export class GetUserByNameUseCaseController {
  async handle(request: Request, response: Response) {
    const getUserByNameUseCase = new GetUserByNameUseCase();

    const result = await getUserByNameUseCase.execute();

    return response.status(201).json(result);
  }
}
