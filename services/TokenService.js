const jwt = require('jsonwebtoken')
const { Token } = require('../models')

class TokenService {
    generateTokens(payload) {
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: process.env.JWT_ACCESS_EXPIRES_IN })
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: process.env.JWT_REFRESH_EXPIRES_IN })
        return {
            accessToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({ where: { UserId: userId } })
        if (tokenData) {
            const [, token] = await Token.update({...tokenData.dataValues, refreshToken}, { id: tokenData.dataValues.id });
            return token
        } else {
            const token = await Token.create({UserId: userId, refreshToken})
            return token.dataValues
        }
    }
}

module.exports = new TokenService()