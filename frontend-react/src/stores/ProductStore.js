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

  _questions: [
    { id: '5e2965c43b6c07f9a6461ed0', name: '이영규', content: '님들 이거 맛있나요?', date: '2020/03/26 23:53:06' },
    { id: '5e295c43b6c07f9a6461ed0', name: '임기봉', content: '님들 시발 존나 맛없네?', date: '2020/03/26 23:53:06' }
  ],

  get paymentProducts() {
    if(this._paymentProducts.length==0){
    return [];
    };
    return this._paymentProducts;
  },

  get questions() {
    return this._questions;
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