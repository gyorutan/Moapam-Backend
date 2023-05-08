const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  loginId: {
    type: String,
    required: true,
    unique: true,
  },
  loginPw: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  carts: [
    {
      country: {
        type: String,
      },
      bp: {
        type: Number,
      },
      price: {
        type: Number,
      },
    },
  ],
});

const User = mongoose.model("User", userSchema);
module.exports = User;
