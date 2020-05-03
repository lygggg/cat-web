import purchaseModel from '../models/purchase.schema';
import reviewModel from '../models/review.schema';

class ReviewRepository {
    async getOne(id, email) {
        console.log(id,email)
    const product = await purchaseModel.findOne({ email: email }, { products:{$elemMatch:{ _id:id }}});
    return product;
    }

    async getReviewList(id) {

        const reviewList = await reviewModel.find({id: id})
        return reviewList;
    }
}

export default ReviewRepository;