const express = require("express")
const morgan = require("morgan");
const chalk = require("chalk");
const app = express();

app.use(morgan("dev"));

const error = chalk.bold.red;
const warning = chalk.hex("#FFA500");
console.log(warning("This is an error "));

app.get("/products", (req, res) => {
  res.send("list all the products")
})
app.post("/products", (req, res) => {
  res.status(201).send("Create a product")
})

app.listen(3000, () => {
  console.log(chalk.underline.bgBlue.bold(`server is running at http://localhost:3000`));
})