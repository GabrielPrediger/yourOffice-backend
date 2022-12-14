import { Request, Response } from "express";
import { GetUserByNameUseCase } from "./GetUserByNameUseCase";

export class GetUserByNameController {
  async handle(request: Request, response: Response) {
    const getUserByNameUseCase = new GetUserByNameUseCase();

    const result = await getUserByNameUseCase.execute();

    return response.status(201).json(result);
  }
}
