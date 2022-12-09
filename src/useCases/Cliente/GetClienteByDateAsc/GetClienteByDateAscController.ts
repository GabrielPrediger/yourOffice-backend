import { Request, Response } from "express";
import { GetClienteByDateAscUseCase } from "./GetClienteByDateAscUseCase";

export class GetClienteByDateAscController {
  async handle(request: Request, response: Response) {
    const getClienteByDateAsc = new GetClienteByDateAscUseCase();

    const result = await getClienteByDateAsc.execute();

    return response.status(201).json(result);
  }
}
