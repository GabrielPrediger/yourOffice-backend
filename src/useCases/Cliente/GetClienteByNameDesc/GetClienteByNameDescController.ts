import { Request, Response } from "express";
import { GetClienteByNameDescUseCase } from "./GetClienteByNameDescUseCase";

export class GetClienteByNameDescController {
  async handle(request: Request, response: Response) {
    const getClienteByNameDesc = new GetClienteByNameDescUseCase();

    const result = await getClienteByNameDesc.execute();

    return response.status(201).json(result);
  }
}
