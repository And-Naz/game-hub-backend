const { Game } = require('../models')
const GameDto = require('../dtos/GameDto')

class GameService {

	async all({ limit }) {
		let queryResult = null
		if (limit) {
			queryResult = await Game.findAll({ limit: Number(limit) })
		} else {
			queryResult = await Game.findAll()
		}
		if (!queryResult) { return [] }
		const dataArr = queryResult.map(res => {
			const obj = new GameDto({...res.dataValues})
			return obj
		})
		return dataArr
	}
}

module.exports = new GameService()