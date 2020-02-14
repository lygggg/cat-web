import model from '../models/basket.schema';

class BasketRepository {
  async getAll(userEmail) {
    if (userEmail === undefined) {
      return [{}];
    }

    const getCart = await model.find({ email: userEmail })
      .populate('products');
    return getCart;
  }

  async putOne( _id, userEmail) {
    await model.updateMany(
      { email: userEmail },
      { $push: { products: _id } }
    );
  }

  async deleteOne(_id, userEmail) {
    if(_id) {
    await model.updateOne(
      { email: userEmail },
      { $pull: { products: _id } }
      )
    }
  }

  async deleteAll(_id, userEmail) {
      await model.updateMany({ email: userEmail },
        { $set: { products: [] }}
      );
  }

  async deleteSelected(_id, userEmail) {
    await model.updateMany(
      { email: userEmail}, {$pull: {products: { $in: _id }}}
      )
}
}

export default BasketRepository;
