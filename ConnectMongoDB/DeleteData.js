const dbConnection = require("../ConnectMongoDB/mongoDB");
const deleteData = async () => {
  let data = await dbConnection();
  let result = await data.deleteMany({
    price: 400,
  });

  if (result.acknowledged) {
    console.log("data deleted ");
  }
};

deleteData();
