const purchaseStore = {

  _purchases: [
    { email: 'baayoo71@naver.com', products: [] },
    { email: 'baayoo79@naver.com', products: [] },
  ],
  _finalBilling: [],

};
const userSignUpPurchase = (userEmail) => {
  purchaseStore._purchases = [...purchaseStore._purchases, {
    email: userEmail,
    products: [],
  }];
};

const createPurchases = (product, userEmail) => {
  purchaseStore._purchases.map((e) => {
    if (e.email === userEmail) {
      e.products = [...e.products, product];
    }
  });
};

const getPurchases = (userEmail) => {
  if (userEmail === undefined) {
    return [[]];
  }
  return purchaseStore._purchases.map((e) => {
    if (e.email === userEmail) {
      return e.products;
    }
  }).filter((e) => e !== undefined);
};

export {
  userSignUpPurchase,
  createPurchases,
  getPurchases,
};

// get purchases() {
    //     return this._purchases;
    // },

    // get finalBilling() {
    //     return this._finalBilling;
    // },

    // plusPurchase(product, date){
    //     product.map(e =>{
    //         this._purchases.push({
    //             ...e,
    //             'date': date,
    //         });
    //     })
    // },

    // lastPayment() { 
    //     this.purchases.map(e=>{
    //         this._finalBilling.push(e);
    //     });
    //     this.deleteList();
    //     console.log(this._finalBilling);
    //     console.log(this._purchases);
    // },
    // deleteList() {
    //     this._purchases=[];
    // },

    //  createPurchases(product, count) {
    //     this._purchases.push({ 
    //         ...product,
    //         'amount': count,
    //         'date': new Date() + '',});
    //     //  this._purchases = this._purchases.filter((item, index) => this._purchases.indexOf(item) === index);
    //  },

    // priceTotal() {
    //     let total = this._finalBilling.map(item => item.price);
    //     let sum = total.reduce(function (pre, value) {
    //         return pre + value;

    //     });
    //     return sum;
    // },