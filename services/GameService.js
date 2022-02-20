const { Game } = require('../models')

class GameService {

	async all({ limit }) {
		if (limit) {
			return await Game.findAll({ limit: Number(limit) })
		}
		return await Game.findAll()
	}
}

module.exports = new GameService()