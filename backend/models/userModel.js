const crypto = require('crypto');
const mongoose = require('mongoose');
const slugify = require('slugify');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, 'Будь ласка, вкажіть ваше ім’я користувача'],
  },
  email: {
    type: String,
    required: [true, 'Будь ласка, вкажіть вашу електронну пошту'],
    unique: true,
    lowercase: true,
    validate: [
      validator.isEmail,
      'Будь ласка, надайте правильну електронну пошту',
    ],
  },
  password: {
    type: String,
    required: [true, 'Будь ласка, надайте пароль'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Будь ласка, підтвердіть ваш пароль'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Паролі не співпадають',
    },
  },
  gender: {
    type: String,
    required: [true, 'Користувач повинен вказати стать'],
    enum: {
      values: ['Жіноча', 'Чоловіча'],
      message: 'Стать на вибір: Чоловік, Жінка',
    },
  },

  birthDate: {
    type: Date,
    default: Date.now(),
    required: [true, 'Будь ласка, укажіть дату народження'],
  },
  country: {
    type: String,
    required: [true, 'Будь ласка, вкажіть вашу країну'],
    enum: {
      values: ['Україна', 'Німеччина', 'Польща', 'США', 'Франція'],
      message: 'Країни на вибір: Україна, Німеччина, США, Франція, Польща',
    },
  },
  englishLevel: {
    type: String,
    required: [true, 'Будь ласка, вкажіть ваш рівень англійської'],
    enum: {
      values: ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'],
    },
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  this.passwordConfirm = undefined;
  next();
});

userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) {
    return next();
  }

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

userSchema.pre(/^find/, function (next) {
  this.find({ active: { $ne: false } });
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword,
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimectamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10,
    );

    return JWTTimestamp < changedTimectamp;
  }

  return false;
};

userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');

  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');

  console.log({ resetToken }, this.passwordResetToken);

  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);

module.exports = User;
