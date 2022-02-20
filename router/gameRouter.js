const router = require('express').Router()
const GameController = require('../controllers/GameController')
const { body } = require('express-validator')

// /api/games/all
router.get('/all', GameController.all);

module.exports = router