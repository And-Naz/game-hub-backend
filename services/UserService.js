const { User } = require('../models')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const MailService = require('./MailService')
class UserService {
	async registration(email, password) {
		try {
			const candidate = await User.findOne({ email })
		} catch (error) {
			throw new Error('User with same email already exists.')
		}
		const hashPassword = bcrypt.hash(password, process.env.PASSWORD_HASHING_SALT)
		const activationLink = uuid.v4()
		const user = await User.create({ email, password: hashPassword, activationLink })
		await MailService.sendActivationMail(email, activationLink)
	}
}

module.exports = new UserService()