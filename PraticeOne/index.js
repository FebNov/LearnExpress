const express = require("express");
const app = express();
//use middleware --  thansfer json of the 'body' -- use body-parser
//then we can use req.body
app.use(express.json());

const people = [];
/// Practice MiddleWare
app.use((req, res, next) => {
  res.setHeader("Time", new Date());
  next();
});
// CORS
app.use((req, res, next) => {
  res.setHeader("Allow-Access-From-Origin", "*");
  next();
});
//get people by name
app.get("/people", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = people.filter((i) => i.name.include(name));
    return res.json(filtered);
  }
  return res.json(people);
});

app.post("/people", (req, res) => {
  const { name, age } = req.body;
  const person = { name, age };
  people.push(person);
  return res.status(201).json(person);
});

app.listen(3000, () => {
  console.log("Listen Port on 3000");
});
