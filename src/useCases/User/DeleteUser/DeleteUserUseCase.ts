import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IDeleteUser } from "./DeleteUserDTO";

export class DeleteUserUseCase {
  async execute({ usuario }: IDeleteUser): Promise<User> {
    const user = await prismaClient.user.delete({
      where: { usuario },
    });

    return user;
  }
}
