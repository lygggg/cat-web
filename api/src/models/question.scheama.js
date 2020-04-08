import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    content: { type: String, required: true },
    date: { type: String, required: true },
});

export default mongoose.model('question', questionSchema);