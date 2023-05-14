const jwt = require("jsonwebtoken");
const userModel = require("../Models/user.model");
require("dotenv").config();


// Protected Routes token base
const RequireSignIn = async (req, res, next) => {
    try {
        const decode = jwt.verify(req.headers.authorization, process.env.SECRET_CODE);
        if (decode) {
            req.user = decode;
        }
        next();
    } catch (error) {
        console.log("RequireSignIn", error)
    }
};


// protected route for admin
const RequireAdmin = async (req, res, next) => {
    try {
        const isExist = await userModel.findById({ _id: req.user._id })
        if (!isExist) {
            return res.status(401).send({
                success: false,
                message: "UnAuthorized Access"
            })
        } else {
            next();
        }
    } catch (error) {
        console.log("RequireAdmin", error)
    }
};


module.exports = { RequireSignIn, RequireAdmin };