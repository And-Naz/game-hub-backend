const bcrypt = require('bcrypt')
const uuid = require('uuid')
const { User } = require('../models')
const MailService = require('./MailService')
const TokenService = require('./TokenService')
const UserDto = require('../dtos/UserDto')

class UserService {
	async registration(email, password) {
		const candidate = await User.findOne({where: { email }})
		if (candidate) {
			throw new Error('User with same email already exists.')	
		}
		const hashPassword = await bcrypt.hash(password, Number(process.env.PASSWORD_HASHING_SALT))
		const activationLink = uuid.v4()
		const user = await User.create({ email, password: hashPassword, activationLink })
		await MailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`)
		const userDto = new UserDto(user.dataValues)
		const tokens = TokenService.generateTokens({...userDto})
		await TokenService.saveToken(userDto.id, tokens.refreshToken)
		return { ...tokens, user: userDto }
	}
}

module.exports = new UserService()