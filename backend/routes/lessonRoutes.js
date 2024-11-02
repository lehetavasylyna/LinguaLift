const express = require('express');
const authController = require('./../controllers/authController');
const lessonsController = require('./../controllers/lessonController');

const router = express.Router();

router
  .route('/')
  .get(authController.protect, lessonsController.getAllLessons)
  .post(lessonsController.createLesson);

router
  .route('/:id')
  .get(lessonsController.getLesson)
  .patch(lessonsController.updateLesson)
  .delete(authController.protect, lessonsController.deleteLesson);

module.exports = router;
