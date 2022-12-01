import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";

export class GetUserDescUseCase {
  async execute(): Promise<User[]> {
    const users = await prismaClient.user.findMany({
      orderBy: {
        usuario: "desc",
      },
    });

    return users;
  }
}
