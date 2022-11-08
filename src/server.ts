import "express-async-errors";
import express, { NextFunction, Request, Response } from "express";
import { router } from "./routes";
import { AppError } from "./errors/AppError";
import * as dotenv from 'dotenv';

const app = express();
dotenv.config()
app.use(express.json());
app.use(router);
app.use(
  (err: Error, request: Request, response: Response, next: NextFunction) => {
    //Se um erro for da instancia AppError ele não é um erro "Interno", e sim um erro que foi  lançado
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "Error",
        message: err.message,
      });
    }

    return response.status(500).json({
      status: "Error",
      message: `Internal server error - ${err.message}`,
    });
  }
);

app.listen(3333);
