const mongoose = require("mongoose");
require("dotenv").config();


const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log(`Connected To Mongo Database ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error In Mongodb ${error}`)
    }
};


module.exports = connectDb;