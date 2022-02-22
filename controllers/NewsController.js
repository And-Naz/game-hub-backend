const NewsService = require('../services/NewsService')
const ApiError = require('../exceptions/ApiError')

class NewsController {
	async all(req, res, next) {
		try {
			return res.status(200).json([])
		} catch (e) {
			next(e)
		}
	}

    async latest(req, res, next) {
		try {
            const serviceResult = await NewsService.latest()
			return res.status(200).json(serviceResult)
		} catch (e) {
			next(e)
		}
	}
}

module.exports = new NewsController()