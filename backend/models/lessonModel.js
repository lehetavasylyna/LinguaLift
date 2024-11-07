const mongoose = require('mongoose');
const User = require('./userModel');

const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
  },
  correctAnswer: {
    type: String,
    required: true,
  },
});

const lessonSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'A lesson must have a title'],
    trim: true,
    maxlength: [
      100,
      'A lesson title must have less or equal than 100 characters',
    ],
    minlength: [
      10,
      'A lesson title must have more or equal than 10 characters',
    ],
  },
  difficulty: {
    type: String,
    enum: ['Easy', 'Medium', 'Hard'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  number_of_tests: {
    type: Number,
    required: true,
  },
  tests: {
    type: [[questionSchema]],
    required: true,
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
