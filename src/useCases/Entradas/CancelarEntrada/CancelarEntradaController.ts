import { Request, Response } from "express";
import { CancelarEntradaUseCase } from "./CancelarEntradaUseCase";

export class CancelarEntradaController {
    async handle(request: Request, response: Response) {

        const { id } = request.params;

        const deleteEntradaController = new CancelarEntradaUseCase();

        const result = await deleteEntradaController.execute({ id: Number(id) });

        return response.status(201).json(result);
    }
}
