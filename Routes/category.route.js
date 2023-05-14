const { Router } = require("express");
const { createCategoryController } = require("../controller/category.controller");
// Router object
const categoryRoute = Router();


categoryRoute.post("/create-category", createCategoryController)


module.exports = categoryRoute;