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

    const updateUser = await prismaClient.user.update({
      where: { id: Number(id) },
      data: { usuario, senha, email, permissao },
    });

    return updateUser;
  }
}
