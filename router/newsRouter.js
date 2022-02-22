const router = require('express').Router()
const NewsController = require('../controllers/NewsController')

// /api/news/all
router.get('/all', NewsController.all);

// /api/news/latest
router.get('/latest', NewsController.latest);

module.exports = router