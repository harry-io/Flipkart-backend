const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("mongoose");
const connectDb = require("./Config/db.database");
const registerController = require("./controller/user.controller");
require("dotenv").config();
const userRoute = require("./Routes/user.route")

// middelwares
app.use(express.json());
app.use(cors());

// routes
app.get("/", (req, res) => {
  res.status(200).send({ message: "Flipkart Backend." });
});



app.use("/users", userRoute);

// rest api
app.listen(process.env.PORT, () => {
  connectDb();
  console.log(`server is running at http://localhost:${process.env.PORT}.`);
});
