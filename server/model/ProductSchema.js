import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
  productname: {
    type: String,
  },
  category: {
    type: String,
  },
  image: {
    type: String,
  },
  price: {
    type: String,
  },
  description: {
    type: String,
  },
  amount : { 
    type : Number,
  }
});

const Product = mongoose.model('Product',ProductSchema);

export default Product