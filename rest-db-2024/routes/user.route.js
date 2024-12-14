const express = require("express");
const router = express.Router();

const { getAllUsers, createUser, getOneUser, deleteUser, updateUser } = require("../controllers/user.controller");


//rest-db-24
// z1DUYAYouTd5LwRa


router.get("/", getAllUsers);
router.get("/:id", getOneUser);
router.delete("/:id", deleteUser);
router.patch("/:id", updateUser);
router.post("/", createUser);

module.exports = router;