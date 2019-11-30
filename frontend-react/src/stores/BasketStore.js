import { filter } from "minimatch";

const basketStore = {
    _basket: [

    ],
    
    get baskets() {
        return this._basket;
    },

    createBasket(product) {
        this._basket.push(product)
        console.log(this._basket);

    },

    deleteBasket() {
        this._basket = [];
    },

    oneDeleteBasket(productId) {
       const deleteResult = this._basket.filter(item => item.id != productId);
       this._basket = deleteResult;
    }
};
export default basketStore;

