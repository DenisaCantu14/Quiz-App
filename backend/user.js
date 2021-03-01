const mongoose = require("mongoose");
const user = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  score: Number
});

module.exports = mongoose.model("User", user);