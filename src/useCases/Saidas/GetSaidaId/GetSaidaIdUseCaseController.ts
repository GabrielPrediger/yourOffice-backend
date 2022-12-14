import { Request, Response } from "express";
import { GetSaidaIdUseCase } from "./GetSaidaIdUseCase";

export class GetSaidaIdController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;

    const getSaidaByDateUseCase = new GetSaidaIdUseCase();

    const result = await getSaidaByDateUseCase.execute({ id });

    return response.status(201).json(result);
  }
}
