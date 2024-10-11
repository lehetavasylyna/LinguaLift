const mongoose = require("mongoose");
const { type } = require("os");
const slugify = require("slugify");
const validator = require("validator");
const User = require("./userModel");

const lessonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A tour must have a name"],
    unique: true,
    trim: true,
    maxlength: [40, "A tour name must have less or equal than 40 characters"],
    minlength: [10, "A tour name must have more or equal than 10 characters"],
  },
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = Lesson;
