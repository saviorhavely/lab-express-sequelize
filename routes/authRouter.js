const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/auth', authController.login)


module.exports = router;