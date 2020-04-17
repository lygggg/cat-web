import mongoose from "mongoose";

const productShapshot = new mongoose.Schema({
  id: { type: Number, required: true, index: false},
  title: { type: String, required: true },
  category: { type: String, required: true },
  price: { type: Number, required: true, trim: true },
  description: { type: String, required: true },
  imageurl: { type: String, required: true },
  account: { type: String },
  phoneNumber: String,
  count: { type: Number, required: true },
  review:{ type: Boolean },
});

const purchaseSchema = new mongoose.Schema({
  email: { type: String, required: true },
  date: { type: String, required: true },
  products: [productShapshot]
});

export default mongoose.model("purchase", purchaseSchema);
