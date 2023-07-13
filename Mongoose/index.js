const mongoose = require("mongoose");
const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/e-comm');
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        brand: String,
        category: String
    
    });
  // create model from schema and export it to use in other files of
  const ProdcutsModel = mongoose.model("products", ProductsSchema);
  let data = new ProdcutsModel({ name: "655" });
  
  let result = await data.save();
  console.log(result);
};

main();
