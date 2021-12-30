const express = require('express');
const router = express.Router()
const userController = require('../controllers/userController');
const { hasCredentials } = require('../middlewares/auth');

router.post('/user/create', userController.createUser)
router.get('/user/list', hasCredentials, userController.getUsers)
router.put('/user/update', hasCredentials, userController.updateUser)
router.delete('/user/delete', hasCredentials, userController.deleteUser)

module.exports = router;