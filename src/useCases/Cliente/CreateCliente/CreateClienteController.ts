import { Request, Response } from "express";
import { CreateClienteUseCase } from "./CreateClienteUseCase";

export class CreateClienteController {
  async handle(request: Request, response: Response) {
    const { nome,
      data_nascimento,
      cpf_cnpj,
      rg,
      endereco, } = request.body;

    const createCliente = new CreateClienteUseCase();

    const result = await createCliente.execute({
      nome,
      data_nascimento,
      cpf_cnpj,
      rg,
      endereco,
    });
    return response.status(201).json(result);
  }
}
