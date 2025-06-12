const {
  getProductList,
  addProduct,
} = require("../controllers/products.controller");

const productsRouter = require("express").Router();

productsRouter.get("/products", getProductList);

productsRouter.post("/products", addProduct);

module.exports = { productsRouter };
