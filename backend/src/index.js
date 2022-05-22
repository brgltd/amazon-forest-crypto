const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const generateFilename = require("./generateFilename");

require("dotenv/config");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    // cb(null, `${Date.now()}-${file.originalname}`);
    cb(null, generateFilename(file.originalname));
  },
});

const upload = multer({ storage: storage }).single("file");

const dir = "./public";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const db = {};
app.post("/image", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.sendStatus(500);
    }
    const name = generateFilename(req.file.originalname);
    db[name] = { title: "", description: "", date: Date.now() };
    res.send(req.file);
  });
});

app.post("/metadata", (req, res) => {});

app.listen(5000, () => console.log(`Listening on 5000`));
