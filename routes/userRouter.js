const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController');

// create user
router.post('/user/create', userController.createUser)

module.exports = router;