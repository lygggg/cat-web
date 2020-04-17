import purchaseModel from "../models/purchase.schema";
import productModel from "../models/product.schema";

class PurchaseRepository {
  async getAll(email) {
    return await purchaseModel.find({ email });
  }

  async getReviewableList(email, isReview) {
    return await purchaseModel.find({ email });
  }

  async getWroteList(email, isReview) {
    console.log(await purchaseModel.find({ email: email }, { products: { $elemMatch:{review: 'true'}}}))
    return await purchaseModel.find({ email: email }, { products: { $elemMatch:{review: 'true'}}})
  }

  async create(products, email) {
    const d = new Date();
    const date =
      d.getFullYear() + "년 " + d.getMonth() + "월 " + d.getDate() + "일";
    await purchaseModel.create({ products, email, date });
  }

  async modifyAmount(products) {
    const data = products.map(product => ({
        updateOne: {
          'filter': { _id: product._id },
          'update': 
            { '$inc': { 'amount': - product.count} },
          
        }
    }));
    await productModel.bulkWrite(data);
  }
}

export default PurchaseRepository;
