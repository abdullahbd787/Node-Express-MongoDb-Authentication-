const express = require("express");
const { body, validationResult, Result } = require("express-validator");
const userRoutes = require("./routes/user");

const app = express();
const port = 3009;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
  
})

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/api", userRoutes)

app.get("/test", (req, res) => {
  res.send("Testing the server")
})

// name, email, password, DoB
// api/register


