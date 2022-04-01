var file = require("file-system");
var fs = require("fs");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const assert = require("assert");

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
const companies = JSON.parse(fs.readFileSync("data/companies.json"));
const items = JSON.parse(fs.readFileSync("data/items.json"));

const batchImport = async () => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    console.log("connected!");
    const db = client.db("Commerce");
    const allCompanies = await db.collection("companies").insertMany(companies);
    const allItems = await db.collection("items").insertMany(items);
  } catch (err) {
    console.log(err);
  }
  client.close();
  console.log("Success!");
};
batchImport();
