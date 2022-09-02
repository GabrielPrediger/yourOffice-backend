import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IGetUser } from "./GetUserDTO";

export class GetUserByNameUseCase {
  async execute(): Promise<User[]> {
    const users = await prismaClient.user.findMany({
      orderBy: {
        usuario: "asc",
      },
    });

    return users;
  }
}
