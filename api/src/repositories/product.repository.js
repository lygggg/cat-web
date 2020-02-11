import model from '../models/product.schema';
import { get } from 'mongoose';

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
      const product = await new model({
            id:  (await model.find({})).length,
            title,
            category,
            price,
            description,
            imageurl,
            account,
            phoneNumber,
      })
      try {
        await product.save();
      } catch(e) {
        return console.error(500, e);
      }
    }
    
    async getOne(productId) {
      const getProducts = await model.find({ id: productId });
      return getProducts;
    }

    async getSearch(string) {
      const getProducts = await model.find({title: {$regex: string}});
      return getProducts;
    }

}

export default ProductRepository;