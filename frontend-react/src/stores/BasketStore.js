import { filter } from "minimatch";

const basketStore = {
    _basket: [

    ],
    
    get baskets() {
        return this._basket;
    },

    set baskets(baskets) {
        this._basket = baskets;
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
       
       console.log(this._basket);
    }
};
export default basketStore;

