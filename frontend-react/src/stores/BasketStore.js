
const basketStore = {
    _basket: [

    ],


    get baskets() {
        return this._basket;
    },

    createBasket(product) {
        this._basket.push(product);
        this._basket = this._basket.filter((item, index) => this._basket.indexOf(item) === index);
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

    toggleItem(productList,taskId) {
        return productList.map(element => {
            if (element.id == taskId) {
                element.completed = !element.completed;
            }

            return element
        });

    },
    toggleDeleteItem(checkItem) {
        const checkDeleteItem = checkItem.filter(product => !product.completed == true);
        this._basket = checkDeleteItem;

    },
    priceTotal() {
        let total = this._basket.map(item => item.price);
        let sum = total.reduce(function (pre, value) {
            return pre + value;

        });
        return sum;
    }
};
export default basketStore;

