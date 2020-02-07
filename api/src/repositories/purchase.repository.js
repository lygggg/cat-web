import model from "../models/purchase.schema";

class PurchaseRepository {
  async getAll(email) {
    return await model.find({ email });
  }

  async create(products, email) {
    const d = new Date();
    const date = d.getFullYear()+'년 '+ d.getMonth()+'월 '+ d.getDate()+'일'
    await model.create({ products, email, date });
  }
}

export default PurchaseRepository;