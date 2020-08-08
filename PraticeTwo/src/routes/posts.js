const express = require("express");
const validateId = require("../middleware/validateId");
const router = express.Router();

const {
  addPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
} = require("../controllers/posts");
const { Router } = require("express");
router.get("", getAllPost);
router.post("", addPost);
router.get("/id", validateId, getPostById);
router.put("id", validateId, updatePostById);
router.delete("/id", validateId, deletePostById);

module.exports = router;
