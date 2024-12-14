const express = require("express");

const { getUsers, SaveUser } = require("../controllers/users.controller");

const router = express.Router();

router.get("/users", getUsers);

router.post("/users", SaveUser);

module.exports = router;
