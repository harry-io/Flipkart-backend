const { Router } = require("express");
const { getProductController, createProductController, updateProductController, deleteProductController, getProductByIdController } = require("../controller/product.controller");
const { RequireSignIn } = require("../Middlewares/user.middleware");

// Router object
const productRoute = Router();

// Route
productRoute.get("/", getProductController);
productRoute.use(RequireSignIn)
productRoute.post("/", createProductController)
productRoute.patch("/:productId", updateProductController);
productRoute.delete("/:deleteId", deleteProductController);
productRoute.get("/:id", getProductByIdController);




module.exports = productRoute;