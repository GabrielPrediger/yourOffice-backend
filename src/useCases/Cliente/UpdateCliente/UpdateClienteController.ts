import { Request, Response } from "express";
import { UpdateClienteUseCase } from "./UpdateClienteUseCase";

export class UpdateClienteController {
  async handle(request: Request, response: Response) {
    const { id, nome, data_nascimento, cpf_cnpj, rg, endereco, } = request.body;

    const updateClienteController = new UpdateClienteUseCase();

    const result = await updateClienteController.execute({
      id,
      nome,
      data_nascimento,
      cpf_cnpj,
      rg,
      endereco,
    });

    return response.status(201).json(result);
  }
}
