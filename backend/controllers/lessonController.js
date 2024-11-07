const Lesson = require("./../models/lessonModel");
const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");

exports.getAllLessons = catchAsync(async (req, res, next) => {
  const lessons = await Lesson.find();

  res.status(200).json({
    status: "success",
    results: lessons.length,
    data: {
      lessons,
    },
  });
});

exports.getLesson = catchAsync(async (req, res, next) => {
  const lesson = await Lesson.findById(req.params.id);

  if (!lesson) {
    return next(new AppError("No lesson found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      lesson,
    },
  });
});

exports.createLesson = catchAsync(async (req, res, next) => {
  const newLesson = await Lesson.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      lesson: newLesson,
    },
  });
});

exports.updateLesson = catchAsync(async (req, res, next) => {
  const lesson = await Lesson.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!lesson) {
    return next(new AppError("No tour found with that ID", 404));
  }

  res.status(200).json({
    status: "success",
    data: {
      lesson,
    },
  });
});

exports.deleteLesson = catchAsync(async (req, res, next) => {
  const lesson = await Lesson.findByIdAndDelete(req.params.id);

  if (!lesson) {
    return next(new AppError("No lesson found with that ID", 404));
  }

  res.status(204).json({
    status: "success",
    data: null,
  });
});
