export default class PurchaseService {
    constructor(purchase) {
        this.purchase = purchase;
    }

    async getPurchase(userEmail) {
        const purchase = await this.purchase.getAll(userEmail);
        return purchase;
    }

    async createPurchase(product, userEmail) {
        await this.purchase.createOne(product, userEmail);
    }
}