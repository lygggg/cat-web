import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    location: { type: String, required: true },
    cart: { },
    purchase: { },
});

export default mongoose.model('user', authSchema);