export default class ReviewService {
    constructor(review) {
        this.review = review;
    }

    async getReview(id, email) {
        const product = await this.review.getOne(id, email);
        return product;
    }
}