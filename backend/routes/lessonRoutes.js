const express = require('express');
const authController = require('./../controllers/authController');
const lessonsController = require('./../controllers/lessonController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, lessonsController.getAllLessons)
  .post(lessonsController.createLesson);

router.route('/:id').get(lessonsController.getLesson);

module.exports = router;
