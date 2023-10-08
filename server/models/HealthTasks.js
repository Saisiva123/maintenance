const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const HealthSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
});


module.exports = mongoose.model("User", userSchema);