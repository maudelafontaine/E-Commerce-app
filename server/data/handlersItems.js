const { response } = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//    .Get all the items
const getProducts = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Commerce");
    const allProducts = await db.collection("items").find().toArray();
    res.status(200).json({
      status: 200,
      message: "Success",
      data: allProducts,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "The server couldn't get the information!",
    });
  }
  client.close();
};
//    .Get item by id
const getProduct = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params._id;
  try {
    await client.connect();
    const db = client.db("Commerce");
    const item = await db.collection("items").findOne({ _id: parseInt(_id) });
    res.status(200).json({
      status: 200,
      message: "Success",
      _id,
      data: item,
    });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "The server couldn't get the information!",
      data: { _id },
    });
  }
  client.close();
};
//        .PATCH/ decrement the number of the items
const updateProductCount = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params._id;
  const newValues = { $inc: { numInStock: -1 } };
  try {
    await client.connect();
    const db = client.db("Commerce");
    const item = await db.collection("items").findOne({ _id: parseInt(_id) });
    const numInStockItems = item.numInStock;
    const result = await db
      .collection("items")
      .updateOne({ _id: parseInt(_id) }, newValues);
    if (numInStockItems === 0) {
      res
        .status(500)
        .json({ status: 500, message: "The Item is Out Of Stock" });
    } else {
      res.status(201).json({ status: 201, _id, data: newValues.$inc });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      data: req.body,
      message: "The server couldn't get the information!",
    });
  }
  client.close();
};
//  .GET the category of the item by ID
const getCategoryById = async (req, res) => {
  console.log(MONGO_URI);
  const client = new MongoClient(MONGO_URI, options);
  const _id = req.params._id;
  try {
    await client.connect();
    const db = client.db("Commerce");
    const item = await db.collection("items").findOne({ _id: parseInt(_id) });
    res
      .status(200)
      .json({ status: 200, message: "Success", _id, data: item.category });
  } catch (err) {
    res.status(500).json({ status: 500, message: "Missing information" });
  }
  client.close();
};
// .GET the items by the category
const getProductsByCategories = async (req, res) => {
  console.log(MONGO_URI);
  const client = new MongoClient(MONGO_URI, options);
  const { category } = req.body;
  try {
    await client.connect();
    const db = client.db("Commerce");
    const items = await db.collection("items").find({ category }).toArray();
    res.status(200).json({ status: 200, data: items });
  } catch (err) {
    res.status(500).json({
      status: 500,
      message: "The server couldn't get the information!",
    });
  }
  client.close();
};

module.exports = {
  getProducts,
  getProduct,
  updateProductCount,
  getCategoryById,
  getProductsByCategories,
};
