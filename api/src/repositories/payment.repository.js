import model from '../models/product.schema';

class PaymentRepository {
    async getOne(products) {
         const getProducts = await model.find({_id : {$in: products.map(i=> { return i.id })}}).select('price')
         let price = 0;
           products.map(i =>
             getProducts
               .map(e => {
                 if (i.id === e._id.toString()) {
                   return i.count * e.price;
                 }
               })
               .filter(i => i !== undefined)
               .forEach(v => price += v ))
               return price + 2500;
    }
}

export default PaymentRepository;