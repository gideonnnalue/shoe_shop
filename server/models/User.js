const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  phonenumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  streetaddress: {
    type: String
  },
  directions: {
    type: String
  },
  state: {
    type: String
  },
  city: {
    type: String
  },
  lga: {
    type: String
  },
  watchlist: {
    type: Array,
    default: []
  },
  history: {
    type: Array,
    default: []
  },
  role: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = User = mongoose.model("user", UserSchema);
