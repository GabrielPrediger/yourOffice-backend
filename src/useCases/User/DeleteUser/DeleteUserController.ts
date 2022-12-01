import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;

    const deleteUserController = new DeleteUserUseCase();

    const result = await deleteUserController.execute({
      id,
    });

    return response.status(201).json(result);
  }
}
