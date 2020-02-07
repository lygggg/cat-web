import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true, trim: true },
    description: { type: String, required: true },
    imageurl: { type: String, required: true },
    account: { type: String },
    phoneNumber: { },
});


export default mongoose.model('products', productSchema);