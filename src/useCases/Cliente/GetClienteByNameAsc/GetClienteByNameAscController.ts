import { Request, Response } from "express";
import { GetClienteByNameAscUseCase } from "./GetClienteByNameAscUseCase";

export class GetClienteByNameAscController {
  async handle(request: Request, response: Response) {
    const getClientesByName = new GetClienteByNameAscUseCase();

    const result = await getClientesByName.execute();

    return response.status(201).json(result);
  }
}
