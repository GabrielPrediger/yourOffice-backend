import { Request, Response } from "express";
import { GetUserIdUseCase } from "./GetUserIdUseCase";

export class GetUserIdController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;

    const getUserByNameUseCase = new GetUserIdUseCase();

    const result = await getUserByNameUseCase.execute({ id });

    return response.status(201).json(result);
  }
}
