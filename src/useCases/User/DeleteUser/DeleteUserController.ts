import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { usuario } = request.body;

    const deleteUserController = new DeleteUserUseCase();

    const result = await deleteUserController.execute({
      usuario,
    });

    return response.status(201).json(result);
  }
}
