const router = require('express').Router()
const UserController = require('../controllers/UserController')

// /api/auth/registration
router.post('/registration', UserController.registration);

// /api/auth/login
router.post('/login', UserController.login);

// /api/auth/logout
router.post('/logout', UserController.logout);

// /api/auth/activate/:link
router.get('/activate/:link', UserController.activate);

// /api/auth/refresh
router.get('/refresh', UserController.refresh);

// /api/auth/users
router.get('/users', UserController.getUsers);

module.exports = router