import { Request, Response } from "express";
import { GetClienteIdUseCase } from "./GetClienteIdUseCase";

export class GetClienteIdController {
  async handle(request: Request, response: Response) {
    const { id }: any = request.params;

    const getClientesByName = new GetClienteIdUseCase();

    const result = await getClientesByName.execute({ id });

    return response.status(201).json(result);
  }
}
