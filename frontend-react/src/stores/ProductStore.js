const productStore = {

  _categories: [
    '사료',
    '간식',
    '캔',
    '모래',
    '장난감',
    '목욕/미용',
    '화장실',
  ],

  get categories() {
    return this._categories;
  },
};
export default productStore;
