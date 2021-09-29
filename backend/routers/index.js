const express = require("express");
const ProductsController = require("../controllers/products.controller");
const ApiController = require("../controllers/api.controller");

const api = express.Router();

api
	.get("/", ApiController.index)
	.get("/items", ProductsController.products)
	.get("/items/:id", ProductsController.productDetails);

module.exports = api;
