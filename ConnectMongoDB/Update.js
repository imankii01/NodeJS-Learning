const dbConnection = require("../ConnectMongoDB/mongoDB");
const updateData = async () => {
  let data = await dbConnection();
  let result = await data.updateOne(
    {
      nameL: "Iphone",
    },
    {
      $set: { nameL: "doubke ankit",price:"40" },
    }
  );
  console.warn(result);
};
updateData();
