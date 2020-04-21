export default class PurchaseService {
    constructor(purchase) {
        this.purchase = purchase;
    }

    async getPurchase(userEmail, isReview) {
        if (isReview === 'true') {
            const purchase = await this.purchase.getReviewableList(userEmail, isReview);
        return purchase;    
        }

        if (isReview === 'false') {
            const purchase = await this.purchase.getWroteList(userEmail, isReview);
        return purchase;    
        }

        const purchase = await this.purchase.getAll(userEmail);
        return purchase;
    }

    async createPurchase(products, email) {
        await this.purchase.create(products, email);
        await this.purchase.modifyAmount(products);
    }
}