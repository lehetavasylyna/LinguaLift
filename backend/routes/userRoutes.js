const express = require('express');
const authController = require('../controllers/authController');
const usersController = require('../controllers/userController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);

router.route('/').get(usersController.getAllUsers);

module.exports = router;
