const express = require("express");
const uploadImg = require("./upload-img");

require("dotenv/config");

const app = express();
const port = process.env.PORT || 5000;

app
  .get("/data", (req, res) => {
    res.status(200).json({ k: "v" });
  })
  .post("/image", (req, res) => {
    uploadImg(req);
    res.status(201);
  })
  .listen(port, () => console.log(`Listening on ${port}`));
