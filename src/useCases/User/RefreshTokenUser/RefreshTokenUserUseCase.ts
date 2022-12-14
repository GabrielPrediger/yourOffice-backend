import { prismaClient } from "../../../database/prismaClient"
import { GenerateTokenProvider } from "../../../provider/GenerateTokenProvider"


class RefreshTokenUserUseCase {
    async execute(refresh_token: string) {
        const refreshToken = await prismaClient.refreshToken.findFirst({
            where: {
                id: refresh_token
            }
        })

        if (!refreshToken) {
            throw new Error("Refresh token invalid")
        }

        const generateTokenProvider = new GenerateTokenProvider();
        const token = await generateTokenProvider.execute(refreshToken.userId);

        return { token }

    }
}

export { RefreshTokenUserUseCase }