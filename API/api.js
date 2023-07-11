const dbConnection = require("../ConnectMongoDB/mongoDB");
const express = require("express");
const app = express();

app.use(express.json());
/* 
get method ------> to get the data from the  database through api
*/

app.get("/", async (req, resp) => {
  let data = await dbConnection();
  data = await data.find().toArray();
  resp.send(data);
});
/* 
post method ------> to send the data in database through api
*/
app.post("/", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.insertOne(req.body);
  console.log(result);
  resp.send(result);
});

/* 
put method ------> to update the data in database through api
*/
app.listen(7000);
