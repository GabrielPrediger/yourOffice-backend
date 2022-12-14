import { Request, Response } from "express";
import { GetClienteByDateDescUseCase } from "./GetClienteByDateDescUseCase";

export class GetClienteByDateDescController {
  async handle(request: Request, response: Response) {
    const getClienteByDateAsc = new GetClienteByDateDescUseCase();

    const result = await getClienteByDateAsc.execute();

    return response.status(201).json(result);
  }
}
