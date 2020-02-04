import mongoose from 'mongoose';


const purchaseSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  products: [{ type: mongoose.ObjectId, ref: 'products' }]
});

export default mongoose.model('purchase', purchaseSchema);