const jwt = require("jsonwebtoken");
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
}