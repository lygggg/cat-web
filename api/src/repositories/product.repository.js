import { productStore } from '../stores/ProductStore';
import model from '../models/product.schema';

class ProductRepository {
    constructor(){

    }

    async getAll({ category, offset, limit }) {
        const getProducts = await model.find({});
        const products = getProducts.filter((i) => i.category === category);
        const total = products.length;
        return {
                  products: products.slice(offset, offset + limit),
                  total,
                };
    }

    async createOne({ title, category, price, description, imageurl, phoneNumber, account }) {
        productStore._product = [...productStore._product, {
            id: productStore._product.length + 1,
            title,
            category,
            price,
            description,
            imageurl,
            phoneNumber,
            account,
          }];
          return productStore._product;
    }
    
    async getOne(id) {
      return productStore._product.find(product => product.id == id);
    }

}

export default ProductRepository;