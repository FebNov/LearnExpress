const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./router");
app.use(cors());
app.use(express.json());

app.use(routes);
app.listen(3000, () => {
  console.log("Listen Port 3000");
});
