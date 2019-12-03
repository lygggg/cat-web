import { filter } from "minimatch";

const basketStore = {
    _basket: [

    ],


    get baskets() {
        return this._basket;
    },

    createBasket(product) {
        this._basket.push(product);
        console.log(test);
        this._basket = this._basket.filter((item, index) => this._basket.indexOf(item) === index);
        console.log(this._basket);

    },

    deleteBasket() {
        this._basket = [];
    },

    oneDeleteBasket(productId) {
        const deleteResult = this._basket.filter(item => item.id != productId);
        this._basket = deleteResult;
    },
    selectDeleteBasket(productId) {

        const deleteResult = this._basket.filter(item => item.id != productId);
        this._basket = deleteResult;
    },
    toggleItem(productList, taskId) {
        productList.map(element => {
            if (element.id == taskId) {
                element.completed = !element.completed;
            }


        });

        return productList;

    },
    toggleDeleteItem(checkItem) {
        const checkDeleteItem = checkItem.filter(product => !product.completed == true);
        this._basket = checkDeleteItem;

    }
};
export default basketStore;

