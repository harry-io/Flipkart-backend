const { Router } = require("express");
const { registerController, loginController } = require("../controller/user.controller");

// Router object;
const userRoute = Router();


//routing
// REGISTER || METHOD : POST
userRoute.post("/register", registerController);

//LOGIN ||  METHOD : POST
userRoute.post("/login", loginController);


module.exports = userRoute;