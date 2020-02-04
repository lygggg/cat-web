import model from '../models/basket.schema';

class BasketRepository {
  constructor() {}

  async getAll(userEmail) {
    if (userEmail === undefined) {
      return [{}];
    }

    const getCart = await model.find({ email: userEmail })
      .populate('products');
    return getCart;
  }

  async putOne( _id, userEmail) {
    await model.update(
      { email: userEmail },
      { $push: { products: _id } }
    );
  }

  async deleteOne(_id, userEmail) {
    if(_id) {
    await model.update(
      { email: userEmail },
      { $pull: { products: _id } }
      )
    }
    
    if(_id === undefined) {
      await model.update({ email: userEmail },
        { $set: { products: [] }}
      );
    }
    await model.updateMany(
    { email: userEmail}, {$pull: {products: { $in: _id }}} , function(err) {console.log(err,500)}
    )
  }
}

export default BasketRepository;
