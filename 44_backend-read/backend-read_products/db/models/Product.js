// 1)
import mongoose from "mongoose";

// 2)
const { Schema } = mongoose;

// 3) with the fields added as per requirements
// xx> by mistake I seperated the "type" and "required" key with ; when it should be , !!> it's an object!!!
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
});

// 4)
const Product =
  mongoose.models.Product || mongoose.model("Product", ProductSchema);

// 5)
export default Product;

/* Action Plan

1) import mongoose

2) store "mongoose" in destructured { Schema } const

3) initialize const for Schema
here I should implement the fields according to requirements

4) intialize const for model and give it the value of schema

5) export it as default

*/
