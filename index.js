const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("mongoose");
const connectDb = require("./config/db.database");
require("dotenv").config();

app.use(express.json());
app.use(cors());

// default route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Flipkart Backend." });
});

app.listen(process.env.PORT, async () => {
  try {
    connectDb();
    console.log(`server is running at http://localhost:${process.env.PORT}.`);
  } catch (error) {
    console.log(error);
  }
});
