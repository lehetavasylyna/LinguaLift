const express = require('express');
const authController = require('../controllers/authController');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);

router.route('/me').get(userController.getUserProfile);

module.exports = router;
