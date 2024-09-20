const express = require("express");
const app = express();

const routes = require("express").Router();

app.get("/", (req, res) => {
  res.send("Hello Maria Martinez");
});

const port = 3000;
// app.listen(process.env.PORT || port, () => {
//   console.log("Web Server is listening at port " + (process.env.PORT || port));
// });
app.listen(port, () => {
  console.log("Web Server is listening at port " + port);
});
