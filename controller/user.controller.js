const userModel = require("../Models/user.model");
const { hashPassword, comparePassword } = require("../helper/user.helper");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const userExist = await userModel.findOne({ email });

        // existing user
        if (userExist) {
            return res.status(200).send({ success: true, message: "Already Register please login" })
        }


        // register user
        const hash = await hashPassword(password);


        // register user
        let newRegisterUser = userModel({
            name,
            email,
            password: hash
        });

        //save
        await newRegisterUser.save();

        res.status(201).send({
            success: true,
            message: "Register Successfully"
        })


    } catch (error) {
        console.log("Register", error)
        res.status(500).send({
            success: false,
            message: "Error In Registeration",
            error
        })
    }
}


const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check user
        const user = await userModel.findOne();
        if (!user) {
            return res.status(404).send({
                success: false,
                message: "Email Is Not Register"
            })
        };

        if (!password) {
            return res.status(200).send({
                success: false,
                message: "Invalid Password"
            });
        };

        // token
        const token = await jwt.sign({ _id: user._id }, process.env.SECRET_CODE, { expiresIn: '7d' });
        res.status(200).send(({
            success: true,
            message: "Login Successfully",
            user: {
                name: user.name,
                email: user.email
            },
            token
        }))

    } catch (error) {
        console.log("Login", error)
        res.status(500).send({
            success: false,
            message: "Error In Login",
            error
        })
    }
}


module.exports = { registerController, loginController };