const { Router } = require("express");
const { getProductController, createProductController, updateProductController, deleteProductController, getProductByIdController } = require("../controller/product.controller");

// Router object
const productRoute = Router();

// Route
productRoute.get("/", getProductController);
productRoute.post("/", createProductController)
productRoute.patch("/:productId", updateProductController);
productRoute.delete("/:deleteId", deleteProductController);
productRoute.get("/:id", getProductByIdController);




module.exports = productRoute;