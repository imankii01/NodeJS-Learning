const { MongoClient, Collection } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const dataBase = "e-comm";
const client = new MongoClient(url);

async function dbConnection() {
  let result = await client.connect();
  let db = result.db(dataBase);
  return db.collection("products");
}

module.exports= dbConnection;