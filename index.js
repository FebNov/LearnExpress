const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const people = [];
let currentID = 1;

//try work
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("listen 3000 Port");
});
