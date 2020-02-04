import model from '../models/purchase.schema';

class PurchaseRepository {
    constructor() {}

    async getAll(userEmail) {
        if (userEmail === undefined) {
            return [{}];
          }

          const purchaseList = await model.find({ email: userEmail })
            .populate('products');
            return purchaseList;
    }

    async createOne({ _id, count }, userEmail) {
      await model.updateMany(
        { email: userEmail },
        { $push: { products: _id, }},
        { $addToSet: { amount: count }},
      );
    }
}

export default PurchaseRepository;