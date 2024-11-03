const { promisify } = require('util');
const saltRounds = 10;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./../models/userModel');

exports.registerUser = async (req, res) => {
  console.log(req.body);

  try {
    const { firstName, email, password } = req.body;
    const existingUser = await User.findOne({ firstName, email });

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(password, salt);
    const newUser = new User({ userName: firstName, email, password: hash });

    await newUser.save();
    console.log('Saved user:', newUser);

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email }).select('+password');

    if (!user)
      return res.status(400).json({ message: 'Can not find the user' });

    const isValidPassword = await user.correctPassword(password, user.password);

    if (!isValidPassword)
      return res.status(400).json({ message: 'Invalid password' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
    console.log('CREATING TOKEN', token);

    res.status(200).json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};
