const express = require("express");
require("dotenv").config();
const mong = require("mongoose");
const bp = require("body-parser");
const router = require("./router/router");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(bp.json());
app.use("/", router);

mong.connect(process.env.DB_URL).then((result) => {
  app.listen(5000, () => {
    console.log("server is listening on port 3000");
  });
});
