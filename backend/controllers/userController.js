const User = require("../models/userModel");
const generateToken = require("../utils/generateToken");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already Exists" });
    }
    user = new User({ username, email, password });
    await user.save();
    const token = generateToken(user._id);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!email) {
      return res.status(400).json({ message: "user doesn't exist" });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({ message: "invalid email or password" });
    }
    const token= generateToken(user._id)
    res.json({token})
  } catch (error) {
    res.status(500).json({message:"server error"})
  }
};
