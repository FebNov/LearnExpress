const express = require("express");
const app = express();
//use middleware --  thansfer json of the 'body' -- use body-parser
//then we can use req.body
app.use(express.json());

const people = [];

//try work
app.get("/people", (req, res) => {
  return res.json(people);
});

app.post("/people", (req, res) => {
  const { name, age } = req.body;
  const person = { name, age };
  people.push(person);
  return res.status(201).json(person);
});
app.listen(3000, () => {
  console.log("listen 3000 Port");
});
