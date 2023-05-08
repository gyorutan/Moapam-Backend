const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  genre: {
    type: String,
    required: true,
  },
  server: {
    type: String,
    required: true,
  },
  tier: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  writer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  postNumber: {
    type: Number,
    ref: "Counter",
    required: true,
  },
  postHits: {
    type: Number,
    default: 0,
  },
  imageUrl: {
    type: String,
  },
  comments: [
    {
      comment: {
        type: String,
      },
      commentBy: {
        type: String,
        require: true,
      },
      commentAt: {
        type: String,
        require: true,
      },
    },
  ],
});

const Post = mongoose.model("Post", PostSchema);
module.exports = Post;
