const mongoose = require("mongoose");
const main = async () => {
  await mongoose
    .connect("mongodb://127.0.0.1:27017/e-comm", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });

  const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });
  // create model from schema and export it to use in other files of
  const ProdcutsModel = mongoose.model("products", ProductSchema);
  let data = new ProdcutsModel({
    name: "Ankit",
    price: 1000,
    brand: "macbook",
    category: "mobile",
    rollno: "sajhdf",
  });

  let result = await data.save();
  console.log(result);
};

main();
