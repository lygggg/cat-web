import { purchaseStore } from '../stores/PurchaseStore';

class PurchaseRepository {
    constructor() {
        
    }

    async getAll(userEmail) {
        if (userEmail === undefined) {
            return [[]];
          }
          return purchaseStore._purchases.map((e) => {
            if (e.email === userEmail) {
              return e.products;
            }
          }).filter((e) => e !== undefined);
    }

    async createOne(product, userEmail) {
        purchaseStore._purchases.map((e) => {
            if (e.email === userEmail) {
              e.products = [...e.products, product];
            }
          });
    }
}

export default PurchaseRepository;