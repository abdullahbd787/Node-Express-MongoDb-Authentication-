const express = require("express");
const app = express();
const userRouter = require("./routes/users.route");

app.use("/api/user/", userRouter);

app.use("/register", (req, res) => {
  // res.status(200).json({
  //   message: "I am register page",
  //   statusCode: 200,
  // });
  // res.redirect("/login");
  res.statusCode = 202;
  res.sendFile(__dirname + "/views/register.html");
});

app.use("/login", (req, res) => {
  // res.send("Hi I am Login page");
  // res.cookie("name", "Abdullah");
  // res.cookie("age", "30");
  res.clearCookie("name");
  res.append("id", "140000");
  res.end();
});

app.get("/", (req, res) => {
  res.statusCode = 201;
  res.sendFile(__dirname + "/views/index.html");
});

app.use((req, res) => {
  res.send("<h1>404! page not found</h1>");
  res.end();
});

module.exports = app;
