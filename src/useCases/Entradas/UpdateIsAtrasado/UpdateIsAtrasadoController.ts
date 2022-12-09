import { Request, Response } from "express";
import { UpdateIsAtrasadoUseCase } from "./UpdateIsAtrasadoUseCase";

export class UpdateIsAtrasadoController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;
    const { isAtrasado } = request.body;

    const updateIsAtrasadoUseCase = new UpdateIsAtrasadoUseCase();

    const result = await updateIsAtrasadoUseCase.execute({
      id,
      isAtrasado
    });

    return response.status(200).json(result);
  }
}
