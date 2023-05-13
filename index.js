const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("mongoose");
require("dotenv").config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Flipkart Backend." });
});

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to MongoDB.");
    console.log(`Port is running at http://localhost:${process.env.PORT}.`);
  } catch (error) {
    console.log(error);
  }
});
