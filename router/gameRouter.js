const router = require('express').Router()
const GameController = require('../controllers/GameController')

// /api/games/all
router.get('/all', GameController.all);

module.exports = router