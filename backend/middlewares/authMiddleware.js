const jwt = require("jsonwebtoken");
const User = require("../models/userModel.js");

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer", "");
  if (!token) {
    return res.status(401).json({ message: "No token, Authorization Denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = await User.findById(decoded.id).select("-password");
    next();
  } catch (error) {
    res.status(401).json({ message: "Token is invalid" });
  }
};
module.exports = authMiddleware;
