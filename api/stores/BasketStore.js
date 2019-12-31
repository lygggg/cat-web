
const basketStore = {
    _basket: [
        
    ],


    get baskets() {
        return this._basket;
    },

    addProductToBasket(product, count) {
        const itemIndex = this._basket.findIndex(item => item.id === product.id);
        if (itemIndex < 0) {
            this._basket.push({ 
                ...product,
                'amount': count
            });
            return;
        }
        this._basket[itemIndex].amount += count;
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
        console.log(this._basket);
        let total = this._basket.map(item => item.price * item.amount);
        let sum = total.reduce(function (pre, value) {
            return pre + value;

        });
        return sum;
    }
};
export default basketStore;

