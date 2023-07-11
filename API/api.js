const express = require("express");
const dbConnection = require("../ConnectMongoDB/mongoDB");
const app = express();

app.get("/", async (req, resp) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  resp.send(data);
});

app.listen(5000);
