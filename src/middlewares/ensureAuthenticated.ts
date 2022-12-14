import { NextFunction, request, Request, response, Response } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {

    const authToken = req.headers.authorization;

    if (!authToken) {
        return res.status(401).json({
            message: "Token esta faltando"
        })
    }

    //corto o token pra pegar somente o token em si, sem o Bearrer no inicio e atribuo o valor do token a var
    const [, token] = authToken.split(" ");

    try {
        verify(token, process.env.PRIVATE_KEY as any)
        return next()

    } catch (err) {
        return response.status(401).json({
            message: "Token invalid!"
        })
    }
}