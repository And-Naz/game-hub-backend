const { News, Game } = require('../models')
const NewsDto = require('../dtos/NewsDto')

class NewsService {

	async all() {
		return await News.findAll({
			order: [['date', 'DESC'], ['id', 'DESC']],
			include: [ Game ]
		})
	}

	async latest() {
		const queryResult = await News.findAll({
			limit: 5,
			order: [['date', 'DESC'], ['id', 'DESC']],
			include: [ Game ]
		})
		const dataArr = queryResult.map(res => {
			const obj = new NewsDto({...res.dataValues, Game: res.dataValues.Game.dataValues})
			return obj
		})
		return dataArr
	}
}

module.exports = new NewsService()