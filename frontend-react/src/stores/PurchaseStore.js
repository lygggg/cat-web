
const purchaseStore = {
    
    _purchases: [

    ],

    _finalBilling: [

    ],

    get purchases() {
        return this._purchases;
    },

    get finalBilling() {
        return this._finalBilling;
    },

    plusPurchase(product){
        product.map(e =>{
            this._purchases.push(e);
        })
    },
    lastPayment() { 
        this.purchases.map(e=>{
            this._finalBilling.push(e);
        });
        this.deleteList();
        console.log(this._finalBilling);
        console.log(this._purchases);
    },
    deleteList() {
        this._purchases=[];
    },

     createPurchases(product) {
         this._purchases.push(product);
        //  this._purchases = this._purchases.filter((item, index) => this._purchases.indexOf(item) === index);
     },

    priceTotal() {
        let total = this._finalBilling.map(item => item.price);
        let sum = total.reduce(function (pre, value) {
            return pre + value;

        });
        return sum;
    },

    // create({title}) {
    //     this._purchases = [...this.purchases, {
    //         title,
    //     }];
    // }
    
};
export default purchaseStore;