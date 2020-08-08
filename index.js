const express = require("express");
const app = express();
app.use(express.json());

const posts = [];
let currentID = 1;
//get all posts
app.get("/posts", (req, res) => {
  return res.json(posts);
});
// add a new post
app.post("/posts", (req, res) => {
  const { author, content } = req.body;
  const post = { author, content, id: currentID++ };
  posts.push(post);
  return res.status(201).json(post);
});
//get by id
app.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  const post = posts.find((i) => i.id === Number(id)); //Number(id) or +id
  if (!post) {
    return res.sendStatus(404);
  } else {
    return res.json(posts);
  }
});
//modify by id
app.put("/posts/:id", (req, res) => {
  const { id } = req.query;
  const { author, content } = req.body;
  const post = posts.find((i) => i.id === Number(id));
  if (!post) {
    return res.sendStatus(404);
  }
  post.author = author;
  post.content = content;
  return res.json(post);
});
//delete by id
app.delete("/posts/:id", (req, res) => {
  const { id } = req.query;
  const { author, content } = req.body;
  const postIndex = posts.findIndex((i) => i.id === Number(id));
  if (postIndex === -1) {
    return res.sendStatus(404);
  }
  posts.splice(postIndex, 1);
  return res.json(post);
});
app.listen(3000, () => {
  console.log("Listen Port 3000");
});
