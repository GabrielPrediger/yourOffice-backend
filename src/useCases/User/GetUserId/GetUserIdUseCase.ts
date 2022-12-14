import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { IGetUser } from "./GetUserIdDTO";

export class GetUserIdUseCase {
  async execute({ id }: IGetUser): Promise<User | null> {
    const users = await prismaClient.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    return users;
  }
}
