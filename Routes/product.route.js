const { Router } = require("express");
const { getProductController, createProductController } = require("../controller/product.controller");

// Router object
const productRoute = Router();

productRoute.get("/", getProductController);
productRoute.post("/", createProductController)




module.exports = productRoute;