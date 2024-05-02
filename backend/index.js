const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connectDb");
require("dotenv").config();
const router = require("./Route/Route");

const app = express();


app.use(cors());


app.use(express.json());


app.use("/api", router);

const port = process.env.PORT || 8000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });
});
