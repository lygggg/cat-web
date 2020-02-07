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

    async deleteBasket(productId, userEmail) {
        if(productId) { await this.baskets.deleteOne(productId, userEmail); }

        if(!productId) { await this.baskets.deleteAll(productId, userEmail); }

        await this.baskets.deleteSelected(productId, userEmail);
        
    }

    async toggleBasket({ userEmail, productId }) {
        await this.baskets.toggleOne({userEmail, productId});
       
    }
}