const express = require("express");
const {
  register,
  login,
  getProfile,
  requestPasswordRequest,
  resetPassword,
} = require("../controllers/userController");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");

//routes
router.post("/register", register);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);
router.post("/passwordreset",requestPasswordRequest)
router.put("/passwordreset",resetPassword)

module.exports = router;
