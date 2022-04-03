"use strict";

const express = require("express");
const morgan = require("morgan");
const {
  getProducts,
  getProduct,
  updateProductCount,
  getCategoryById,
  getProductsByCategories,
} = require("./data/handlersItems");
const { getCompanies, getCompanyById } = require("./data/handlersCompanies");

const PORT = 4000;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(express.static("./server/assets"))
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use("/", express.static(__dirname + "/"))

  // REST endpoints?
  .get("/product", getProducts)
  .get("/product/:_id", getProduct)
  .post("/product/category", getProductsByCategories)
  .get("/product/categories/:_id", getCategoryById)
  .patch("/product/purchase/:_id", updateProductCount)
  .get("/companies", getCompanies)
  .get("/companies/:_id", getCompanyById)

  .listen(PORT, () => console.info(`Listening on port ${PORT}`));
