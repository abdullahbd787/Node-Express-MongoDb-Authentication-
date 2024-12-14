const express = require("express");
const app = express();
const PORT = 3000;

const myMiddleWare = (req, res, next) => {
  console.log("Middle ware  function");
  req.currentTime = new Date(Date.now());
  next();
};

app.use(myMiddleWare);

app.get("/", (req, res) => {
  console.log("I am home." + req.currentTime);
  res.send("<h1>I am home route</h1>");
});
app.get("/about", (req, res) => {
  console.log("I am about." + req.currentTime);
  res.send("<h1>I am about route</h1>");
});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
