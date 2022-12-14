import { User } from "@prisma/client";
import { hash } from "bcryptjs";
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

    const senhaHash = await hash(senha, 8)

    const updateUser = await prismaClient.user.update({
      where: { id: Number(id) },
      data: { usuario, senha: senhaHash, email, permissao },
    });

    return updateUser;
  }
}
