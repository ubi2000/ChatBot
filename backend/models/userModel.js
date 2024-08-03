const mongoose = require("mongoose");
const JWT = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "password should be 6 digit"],
  },
  customerId: {
    type: String,
    default: "",
  },
  subscription: {
    type: String,
    default: "",
  },
});




const User = mongoose.model("User", userSchema);

module.exports = User;
