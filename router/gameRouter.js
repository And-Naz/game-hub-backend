const router = require('express').Router()
const GameController = require('../controllers/GameController')

// /api/games/all
router.get('/all', GameController.all);
router.get('/homePage', GameController.homePage);
router.get('/game/:id', GameController.getGame);

module.exports = router