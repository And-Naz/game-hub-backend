const { validationResult } = require('express-validator')
const GameService = require('../services/GameService')
const ApiError = require('../exceptions/ApiError')

class UserController {
	async all(req, res, next) {
		try {
			const allGames = await GameService.all(req.query)
			return res.status(200).json(allGames)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new UserController()