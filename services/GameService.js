const { Game } = require('../models')
const GameDto = require('../dtos/GameDto')

class GameService {

	async all() {
		const queryResult = await Game.findAll()
		if (!queryResult) { return [] }
		const dataArr = queryResult.map(res => {
			const obj = new GameDto({ ...res.dataValues })
			return obj
		})
		return dataArr
	}
	async homePage() {
		const queryResult = await Game.findAll({ limit: 4 })
		if (!queryResult) { return [] }
		const dataArr = queryResult.map(res => {
			const obj = new GameDto({ ...res.dataValues })
			return obj
		})
		return dataArr
	}

	async getGame(id) {
		console.log("\n\n\n\n", typeof id);
		console.log("\n\n\n\n", id);
		const queryResult = await Game.findOne({ where: { id } })
		const gameDto = new GameDto({ ...queryResult.dataValues })
		return gameDto
	}
}

module.exports = new GameService()