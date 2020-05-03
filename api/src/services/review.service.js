export default class ReviewService {
    constructor(review) {
        this.review = review;
    }

    async getReview(id, email) {
        const product = await this.review.getOne(id, email);
        console.log(product,'뭐야시발', id, email);
        return product;
    }

    async getReviewList(id) {
        const reviweList = await this.review.getReviewList(id);
        return reviweList;
    }
}