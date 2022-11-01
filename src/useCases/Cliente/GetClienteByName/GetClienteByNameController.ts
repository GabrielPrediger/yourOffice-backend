import { Request, Response } from "express";
import { GetClienteByNameUseCase } from "./GetClienteByNameUseCase";

export class GetClienteByNameController {
  async handle(request: Request, response: Response) {
    const getClientesByName = new GetClienteByNameUseCase();

    const result = await getClientesByName.execute();

    return response.status(201).json(result);
  }
}
