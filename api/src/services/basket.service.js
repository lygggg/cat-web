export default class BasketService {
    constructor(baskets) {
        this.baskets = baskets;
    }

    async getBaskets(userEmail) {
        const baskets = await this.baskets.getAll(userEmail);
        return baskets;
    }

    async putBasket(basket, userEmail) {
        await this.baskets.putOne(basket, userEmail);
    }

    async deleteBasket({ productId, userEmail }) {
        await this.baskets.deleteOne({ productId, userEmail });
    }

    async toggleBasket({ userEmail, productId }) {
        await this.baskets.toggleOne({userEmail, productId});
       
    }
}