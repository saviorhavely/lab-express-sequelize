const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController');
const { isAdmin } = require('../middlewares/auth');

// create user
router.post('/user/create', userController.createUser)
router.get('/user/list', isAdmin, userController.getUsers)

module.exports = router;