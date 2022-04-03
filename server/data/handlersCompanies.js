const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// .GET all the companies from the database
const getCompanies = async (req, res) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Commerce");
    const allCompanies = await db.collection("companies").find().toArray();
    res
      .status(200)
      .json({ status: 200, message: "Success!", data: allCompanies });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
  client.close();
};
// .GET the company by ID
const getCompanyById = async (req, res) => {
  const _id = req.params._id;
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("Commerce");
    const company = await db
      .collection("companies")
      .findOne({ _id: parseInt(_id) });
    res
      .status(200)
      .json({ status: 200, message: "Success", _id, data: company });
  } catch (err) {
    res.status(500).json({ status: 500, message: err });
  }
  client.close();
};

module.exports = { getCompanies, getCompanyById };
