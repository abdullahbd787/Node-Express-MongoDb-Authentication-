const express = require("express");
const app = express();
const PORT = 3001;
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//query parameter
// app.get("/", (req, res) => {
//   // const id = req.query.id;
//   // const name = req.query.name;
//   // const { id, name } = req.query;
//   res.send(`Student name is: ${name}, id is : ${id}`);
// });

//route parameter
// app.get("/userId/:id/userAge/:age", (req, res) => {
//   const id = req.params.id;
//   const age = req.params.age;
//   res.send(`Student id is: ${id}, age is : ${age}`);
// });

//request with headers
// app.get("/", (req, res) => {
//   const id = req.header("id");
//   const name = req.header("name");
//   res.send(`Student id is: ${id}, name is : ${name}`);
// });

//using body parser json data sent
app.post("/user", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  res.send(`welcome ${name}. You are ${age}.`);
});

app.get("/register", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/register", (req, res) => {
  const fullName = req.body.fullName;
  const age = req.body.age;
  res.send(`welcome ${fullName}. your age is ${age}.`);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
