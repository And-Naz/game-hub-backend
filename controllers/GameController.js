const { validationResult } = require('express-validator')
const GameService = require('../services/GameService')
const ApiError = require('../exceptions/ApiError')

class UserController {
	async all(req, res, next) {
		try {
			const allGames = await GameService.all()
			return res.status(200).json(allGames)
		} catch (e) {
			next(e)
		}
	}
	async homePage(req, res, next) {
		try {
			const allGames = await GameService.homePage()
			return res.status(200).json(allGames)
		} catch (e) {
			next(e)
		}
	}
	async getGame(req, res, next) {
		try {
			const id = Number(req.params.id)
			if (Number.isNaN(id)) {
				throw new ApiError(400, "Invalid Game Id.")
			}
			const allGames = await GameService.getGame(id)
			return res.status(200).json(allGames)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new UserController()