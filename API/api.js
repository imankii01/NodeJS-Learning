const dbConnection = require("../ConnectMongoDB/mongoDB");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", async (req, resp) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  resp.send(data);
});

app.post("/", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  console.log(result);
  resp.send(result);
});

app.listen(7000);
