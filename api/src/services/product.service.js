export default class ProductService {
    constructor(products) {
        this.products = products;
    }

    async getProducts({ category, offset, limit }) {
        const products = await this.products.getAll({ category, offset, limit });
        return products;
    }

    async createProduct(product) {
        await this.products.createOne(product);
    }

    async getProduct(id) {
        const product = await this.products.getOne(id);
        return product;
    }

    async getSearchProducts(string) {
        const products = await this.products.getSearch(string);
        return products;
    }
};