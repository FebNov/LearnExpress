const postModel = require("../models/posts");

function getAllPost(req, res) {
  const posts = postModel.getAllPost();
  return res.json(posts);
}

function addPost(req, res) {
  const { author, content } = req.body;
  const post = postModel.addPost({ author, content });
  return res.status(201).json(post);
}

function getPostById(req, res) {
  const { id } = req.params;
  const post = postModel.getPostById(id);
  //validate params
  return res.json(posts);
}

function updatePostById(req, res) {
  const { id } = req.query;
  const { author, content } = req.body;
  const newPost = postModel.updatePostById(id, { author, content });
  return res.json(newPost);
}
function deletePostById(req, res) {
  const postIndex = posts.findIndex((i) => i.id === id);
  const postSplice = postModel.deletePostById(id);
  return res.json(postSplice);
}

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
};
