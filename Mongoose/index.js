const mongoose = require("mongoose");

mongoose
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

const saveInDB = async () => {
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

  // create model from schema and export it to use in other files of
  const ProdcutsModel = mongoose.model("products", ProductSchema);
  let data = new ProdcutsModel({
    name: "Note pro",
    price: 3000,
    brand: "Mi Not",
    category: "mobile",
  });

  let result = await data.save();
  console.log(result);
};

const updateInDB = async () => {
  const Prodcuts = mongoose.model("products", ProductSchema);

  let data = await Prodcuts.updateOne(
    { name: "m8" },
    {
      $set: { price: 700 },
    }
  );
  console.log(data);
};
const deleteInDb = async () => {
  const Prodcuts = mongoose.model("products", ProductSchema);

  let data = await Prodcuts.deleteMany({
    name: "Ankit",
  });

  console.log(data);
};
const findInDb = async () => {
  const Prodcuts = mongoose.model("products", ProductSchema);

  let data = await Prodcuts.find({ name: "Note pro" });

  console.log(data);
};
// deleteInDb();
// updateInDB();

findInDb();
