import dayjs from "dayjs"
import { prismaClient } from "../database/prismaClient"


class GenerateRefreshToken {

    async execute(userId: string) {
        const expiresIn = dayjs().add(8, "hours").unix()

        const generateRefreshToken = await prismaClient.refreshToken.create({
            data: {
                userId,
                expiresIn
            }
        })

        return generateRefreshToken
    }
}

export { GenerateRefreshToken }