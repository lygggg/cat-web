import mongoose from 'mongoose';

const basketSchema = new mongoose.Schema({
  email: { type: String, unique: true, required: true },
  products: [{ type: mongoose.ObjectId, ref: 'products' }]
});

export default mongoose.model('basket', basketSchema);