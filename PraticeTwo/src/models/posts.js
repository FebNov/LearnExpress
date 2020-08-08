const posts = [];
let currentID = 1;

function addPost(post) {
  const newPost = { ...post, id: currentID++ };
  //const post = { author, content, id: currentID++ };
  posts.push(post);
  return newPost;
}

function getAllPost() {
  // we want to sescre the data ,so that using deep copy
  return JSON.parse(JSON.stringify(posts));
  //but when we use actul database, we dont have to using deep copy
}
//check id exist or not && get index  ---two purposes
function getPostIndexById(id) {
  return posts.findIndex((i) => i.id === id);
}
function getPostById(id) {
  //Number(id) or +id, but we need to this at controllers so that use line 20
  //return posts.find((i) => i.id === Number(id));
  return posts.find((i) => i.id === id);
}
function updatePostById(id, newPost) {
  //replace ref
  const postIndex = getPostIndexById(id);
  const updatePost = { ...newPost, id };
  post[postIndex] = updatePost;
  return updatePost;
  /* get ref, then modify it

  const { id } = req.query;
  const { author, content } = req.body;
  const post = posts.find((i) => i.id === Number(id));
  if (!post) {
    return res.sendStatus(404);
  }
  post.author = author;
  post.content = content;
  return res.json(post);
  */
}

function deletPostById(id) {
  const postIndex = getPostIndexById(id);
  const postSplice = posts.splice(postIndex, 1);
  return postSplice;
}

module.exports = {
  addPost,
  getAllPost,
  getPostById,
  getPostIndexById,
  updatePostById,
};
