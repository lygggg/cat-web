import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
    email: { type: String, required: true },
    id: { type: Number, required: true },
    starCount: { type: Number, required: true },
    reviewText: { type: String },
    imageUrl: { type: String },
    date: { type: String, required: true },
})

export default mongoose.model('reviews', reviewSchema);