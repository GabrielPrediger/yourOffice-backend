import { compare, hash } from 'bcryptjs';
import { User } from "@prisma/client";
import { prismaClient } from "../../../database/prismaClient";
import { AppError } from "../../../errors/AppError";
import { IAuthenticateUser } from "./AuthenticateUserDTO";
import { sign } from 'jsonwebtoken';
import { GenerateRefreshToken } from '../../../provider/GenerateRefreshToken';
import { GenerateTokenProvider } from '../../../provider/GenerateTokenProvider';

export class AuthenticateUserUseCase {

  async execute({ usuario, senha }: IAuthenticateUser) {

    const userAlreadyExists = await prismaClient.user.findFirst({
      where: {
        usuario
      }
    })

    if (!userAlreadyExists) {
      throw new Error("Usuario ou Senha incorretos!")
    }
    console.log(senha, 'senha');
    console.log(userAlreadyExists, 'userAlreadyExists');
    console.log(userAlreadyExists.senha, 'userAlreadyExists.senha');

    // verifica se a senha esta correta
    const comparacaoSenha = await compare(senha, userAlreadyExists.senha)
    console.log(comparacaoSenha, 'comparacaoSenha');

    if (!comparacaoSenha) {
      console.log('o');
      throw new Error("Usuario ou Senha incorretos!")
    }

    // gerar token do usuario

    const generateTokenProvider = new GenerateTokenProvider()
    const token = await generateTokenProvider.execute(userAlreadyExists.id.toString())

    const generateRefreshToken = new GenerateRefreshToken();
    const refreshToken = await generateRefreshToken.execute(userAlreadyExists.id.toString())

    return { token, refreshToken };
  }
}
