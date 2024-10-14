const mongoose = require('mongoose');
const User = require('./userModel');

const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A lesson must have a name'],
    unique: true,
    trim: true,
    maxlength: [40, 'A lesson name must have less or equal than 40 characters'],
    minlength: [10, 'A lesson name must have more or equal than 10 characters'],
  },
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
