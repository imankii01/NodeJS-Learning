const dbConnection = require("../ConnectMongoDB/mongoDB");

const insert = async () => {
  const db = await dbConnection();
  console.log(db);
  const result = await db.insertMany([
    {
      name: "note we5",
      brand: "mobilsde",
      price: 400,
      category: "mossbile",
    },
    {
      name: "nodddte we5",
      brand: "mobilddsde",
      price: 4300,
      category: "mosfsbile",
    },
    {
      name: "nfote wef5",
      brand: "mobifflsde",
      price: 4040,
      category: "meossbile",
    },
  ]);
  if (result.acknowledged) {
    console.log("data inserted ");
  }
};

insert();
