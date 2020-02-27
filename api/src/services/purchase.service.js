export default class PurchaseService {
    constructor(purchase) {
        this.purchase = purchase;
    }

    async getPurchase(userEmail) {
        const purchase = await this.purchase.getAll(userEmail);
        return purchase;
    }

    async createPurchase(products, email) {
        await this.purchase.create(products, email);
        await this.purchase.modifyAmount(products);
    }
}