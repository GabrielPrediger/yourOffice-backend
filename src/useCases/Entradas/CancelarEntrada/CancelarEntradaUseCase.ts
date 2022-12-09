import { Entrada } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IDeleteEntrada } from "./IDeleteEntrada";

export class CancelarEntradaUseCase {
    async execute({ id }: IDeleteEntrada): Promise<void> {

        const produtosIniciais = await prismaClient.entradaProduto.findMany({
            where: { entrada_id: Number(id) },
        })

        //apaguei as entradas
        await prismaClient.entradaProduto.deleteMany({
            where: { entrada_id: Number(id) },
        })


        await Promise.all(produtosIniciais.map(async ({ entrada_id, produto_id, quantidade }) => {
            const produto = await prismaClient.produto.findUnique({
                where: { id: produto_id }
            })

            await prismaClient.produto.update({
                where: { id: produto_id },
                data: {
                    quantidade: produto?.quantidade ?? 0 + quantidade
                }
            })
        }))

        await prismaClient.entrada.delete({
            where: { id: Number(id) },
        });

    }
}
