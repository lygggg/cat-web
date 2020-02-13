const productStore = {
  _paymentProducts: [


  ],

  _categories: [
    '사료',
    '간식',
    '캔',
    '모래',
    '장난감',
    '목욕/미용',
    '화장실',
  ],

  get paymentProducts() {
    if(this._paymentProducts.length==0){
    return [];
    };
    return this._paymentProducts;
  },

  get categories() {
    return this._categories;  
  },
  
  putPayProducts(products) {
    this._paymentProducts = [];
    this._paymentProducts = [...this.paymentProducts, products]

  }
};
export default productStore;