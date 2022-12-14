import { Request, Response } from "express";
import { GetUserDescUseCase } from "./GetUserDescUseCase";

export class GetUserDescController {
  async handle(request: Request, response: Response) {
    const getUserDescUseCase = new GetUserDescUseCase();

    const result = await getUserDescUseCase.execute();

    return response.status(201).json(result);
  }
}
