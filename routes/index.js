const express = require("express");
const {
  ServerHome,
  Create,
  getPosts,
  updatePostHits,
  getDetail,
  writeComment,
  updatePost,
  deletePost,
  deleteComment,
} = require("../controllers/post.js");
const { Login, Register, CheckUsername } = require("../controllers/auth.js");
const { getCart, saveCart, deleteCart,} = require("../controllers/user.js");
const { getImage } = require("../middleware/upload.js");
const router = express.Router();

// Server Home
router.get("/", ServerHome);

// Get Image
router.get("/image", getImage);

// Get Posts
router.get("/market", getPosts);

// Get Post Detail
router.get("/:id", getDetail);

// Get Cart
router.get("/cart/:id", getCart);

// Login
router.post("/login", Login);

// Register
router.post("/register", Register);

// Duplication
router.post("/checkusername", CheckUsername);

// Create Post
router.post("/create", Create);

// Write Comment
router.post("/comment/:id", writeComment);

// Save Cart
router.post("/cart/:id", saveCart);

// Update Hits
router.put("/hits/:id", updatePostHits);

// Update Post
router.put("/:id", updatePost);

// Delete Post
router.delete("/:id", deletePost);

// Delete Comment
router.delete("/comment/:id", deleteComment);

// Delete Cart
router.delete("/cart/:id", deleteCart);

module.exports = router;
