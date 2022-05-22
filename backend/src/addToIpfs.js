const { NFTStorage, File } = require("nft.storage");
const mime = require("mime");
const fs = require("fs");
const path = require("path");
require("dotenv/config");

const token = process.env.TOKEN;

async function fileFromPath(filePath) {
  const content = fs.readFileSync(filePath);
  const type = mime.getType(filePath);
  return new File([content], path.basename(filePath), { type });
}

async function storeNft(imagePath, name, description) {
  const image = await fileFromPath(imagePath);
  const nftstorage = new NFTStorage({ token });
  console.log("calling nftstorage.store");
  return nftstorage.store({
    image,
    name,
    description,
  });
}

async function addToIpfs(entity) {
  throw new Error("ipfs error");
  const { filename, title, description } = entity;
  const imagePath = `./public/${filename}`;
  const result = await storeNft(imagePath, title, description);
  return result;
}

module.exports = addToIpfs;
