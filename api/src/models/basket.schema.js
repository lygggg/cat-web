import mongoose from 'mongoose';

const basketSchema = new mongoose.Schema({
    id : { type: Number, required: true, unique: true },
    price : { type: Number, required: true, trim: true },
    title : { type: String, required: true },
    imageurl: { type: String, required: true },
    count: { type: String },
    completed: { },
});

export default mongoose.model('basket', basketSchema);