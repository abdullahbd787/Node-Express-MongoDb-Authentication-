const express = require("express");

const { getProducts, SaveProduct } = require("../controllers/products.controller");
 
const router = express.Router();

router.get("/products", getProducts);

router.post("/products", SaveProduct);

module.exports = router;
