import purchaseModel from '../models/purchase.schema';

class ReviewRepository {
    async getOne(id, email) {
    const product = await purchaseModel.findOne({ email: email }, { products:{$elemMatch:{ _id:id }}});
    return product;
    }
}

export default ReviewRepository;