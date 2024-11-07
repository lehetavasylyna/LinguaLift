const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const { promisify } = require("util");

exports.getUserProfile = async (req, res) => {
  const token = req.headers.authorization.split(" ")[1];

  let decoded;
  try {
    decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  } catch (err) {
    console.error("JWT verification error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }

  const currentUser = await User.findById(decoded.id);

  try {
    const user = await User.findOne({ email: currentUser.email });
    if (!user) return res.status(404).json({ message: "User not found" });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
