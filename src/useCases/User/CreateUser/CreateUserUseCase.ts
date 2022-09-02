import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { ICreateUser } from "./CreateUserDTO";

export class CreateUserUseCase {
  async execute({
    usuario,
    senha,
    email,
    permissao,
  }: ICreateUser): Promise<User> {
    const userAlreadyExists = await prismaClient.user.findUnique({
      where: { usuario },
    });

    const userEmailAlreadyExists = await prismaClient.user.findUnique({
      where: { email },
    });

    if (userAlreadyExists || userEmailAlreadyExists) {
      throw new AppError("User Already Exists", 400);
    }

    const user = await prismaClient.user.create({
      data: { usuario, senha, email, permissao },
    });

    return user;
  }
}
