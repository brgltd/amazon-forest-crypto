import express from "express";
import "dotenv/config";

const PORT = process.env.PORT || 5000;

express()
  .get("/", (req, res) => res.status(200).json({ k: "v" }))
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
