export default class PaymentService {
    constructor(products) {
        this.products = products;
    }

    async getPrice(products) {
        const getPrice = await this.products.getOne(products)
        return getPrice;
    }
};