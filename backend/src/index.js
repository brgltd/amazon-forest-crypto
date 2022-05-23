const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const multer = require("multer");
const fs = require("fs");
const addToIpfs = require("./addToIpfs");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static("public"));

const dir = "./public";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage }).single("file");

const db = [];

app.post("/image", (req, res) => {
  try {
    upload(req, res, (err) => {
      if (err) {
        res.sendStatus(500);
      }
      const filename = req.file.originalname;
      db.push({ filename });
      res.send(req.file);
    });
  } catch (error) {
    console.error("/image error");
    console.error(error);
    res.sendStatus(500);
  }
});

app.post("/metadata", async (req, res) => {
  try {
    const meta = {
      title: req.body.title,
      description: req.body.description,
      date: Date.now(),
    };
    db[db.length - 1] = { ...db[db.length - 1], ...meta };
    const entity = db[db.length - 1];
    const ipfsResult = await addToIpfs(entity);
    console.log("ipfsResult");
    console.log(ipfsResult);
    const cid = ipfsResult.ipnft;
    db[db.length - 1] = { ...db[db.length - 1], cid };
    res.send(cid);
  } catch (error) {
    console.error("/metadata error");
    console.error(error);
    db.pop();
    res.sendStatus(500);
  }
});

app.get("/assets", (req, res) => {
  try {
    console.log("returning");
    console.log(db);
    res.status(201).json(db);
  } catch (error) {
    console.error("/assets error");
    console.error(error);
    res.sendStatus(500);
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on ${port}`));
