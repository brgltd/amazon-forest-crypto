const express = require("express");
const cors = require("cors");
const uploadImg = require("./upload-img");

require("dotenv/config");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors);

app.post("/image", (req, res) => {
  console.log("image");
  uploadImg(req);
  res.status(201);
});

app.listen(port, () => console.log(`Listening on ${port}`));
