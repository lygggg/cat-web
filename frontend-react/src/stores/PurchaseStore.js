
const purchaseStore = {
    _purchases: [

    ],

    get purchases() {
        return this._purchases;
    },
    plusPurchase(product){
        // this._purchases.push(product.map(e => {
        //     return e;
        // }))
        product.map(e =>{
            this._purchases.push(e);
        })
    },

    createPurchases(product) {
        this._purchases.push(product);
        this._purchases = this._purchases.filter((item, index) => this._purchases.indexOf(item) === index);
    },
    priceTotal() {
        let total = this._purchases.map(item => item.price);
        let sum = total.reduce(function (pre, value) {
            return pre + value;

        });
        return sum;
    }
};
export default purchaseStore;