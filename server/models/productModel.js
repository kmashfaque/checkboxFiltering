import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name to the product"],
  },
  rating: {
    type: Number,
    required: [true, "Please provide a rating for the rating"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for the product"],
  },
  brand: {
    type: String,
    lowercase: true,
    required: [true, "Please provide a brand for the product"],
  },
  price: {
    type: Number,
    required: [true, "Please provide bootcamp with price"],
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
