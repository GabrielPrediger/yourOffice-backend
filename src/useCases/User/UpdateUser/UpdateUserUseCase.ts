import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IUpdateUser } from "./UpdateUserDTO";

export class UpdateUserUseCase {
  async execute({
    id,
    usuario,
    senha,
    email,
    permissao,
  }: IUpdateUser): Promise<User> {
    const user = await prismaClient.user.update({
      where: { id },
      data: { usuario, senha, email, permissao },
    });

    return user;
  }
}
