const express = require("express");
const dotenv = require("dotenv");
const axios = require("axios");
const connectToDB = require("./db/db");
const Post = require("./models/Post.model");
const router = require("./routes/PostRoute");

dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/quotes", router);
app.get("/", (req, res) => {
  res.send("Hi ");
});


connectToDB();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
