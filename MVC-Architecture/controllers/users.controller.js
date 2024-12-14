const users = require("../models/users.model");

exports.getUsers = (req, res) => {
  res.sendFile(path.join(__dirname + "/../views/index.html"));
};
const path = require("path");

exports.SaveUser = (req, res) => {
  const name = req.body.name;
  const age = Number(req.body.age);
  const user = {
    name,
    age,
  };
  users.push(user);
  res.status(201).json({
    success: true,
    users,
  });
};
