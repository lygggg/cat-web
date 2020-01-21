
const purchaseStore = {

  _purchases: [

  ],

  _finalBilling: [

  ],

  get purchases() {
    return this._purchases;
  },

  get finalBilling() {
    return this._finalBilling;
  },

  plusPurchase(product, date) {
    product.map((e) => {
      this._purchases.push({
        ...e,
        'date': date,
      });
    });
  },

  lastPayment() {
    this.purchases.map((e) => {
      this._finalBilling.push(e);
    });
    this.deleteList();
  },
  deleteList() {
    this._purchases=[];
  },

  createPurchases(product, count) {
    this._purchases.push({
      ...product,
      'amount': count,
      'date': new Date() + '',});
  },

  priceTotal() {
    const total = this._finalBilling.map((item) => item.price);
    const sum = total.reduce(function (pre, value) {
      return pre + value; 
    });
    return sum;
  },
};
export default purchaseStore;
