import { compare, hash } from 'bcryptjs';
import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IAuthenticateUser } from "./AuthenticateUserDTO";
import { sign } from 'jsonwebtoken';
import { GenerateRefreshToken } from '../../../provider/GenerateRefreshToken';
import { GenerateTokenProvider } from '../../../provider/GenerateTokenProvider';

export class GetAuthenticateTokenUseCase {
  async execute({ usuario }: IAuthenticateUser) {

    const user = await prismaClient.user.findFirst({
      where: {
        usuario
      }
    })

    if (!user) {
      throw new Error("Usuario ou Senha incorretos!")
    }

    const generateTokenProvider = new GenerateTokenProvider()
    const token = await generateTokenProvider.execute(user.id.toString())

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(user.id.toString())

    return { token, refreshToken };
  }
}
