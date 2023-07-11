const dbConnection = require("../ConnectMongoDB/mongoDB");
const express = require("express");
const mongodb = require("mongodb");
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

app.put("/:name", async (req, resp) => {
  let data = await dbConnection();
  let result = await data.updateOne(
    { name: req.params.name }, //condition
    {
      $set: req.body,
    }
  );
  resp.send({ result: "result updated data" });
});
//delete method---->to delete a particular record of given id using DELETE request with API endpoint /
app.delete("/:id", async (req, resp) => {
  console.log(req.params.id);
  const data = await dbConnection();
  const result = await data.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  resp.send(result);
  // resp.send("done");
});
app.listen(7000);
