const basketStore ={
    _basket: [

    ],
    get baskets() {
        return this._basket;
    },
    createBasket(product){
        this._basket.push(product)
        console.log(this._basket);

    },
};
export default basketStore;

