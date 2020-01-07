
const basketStore = {
    _baskets: [
        {
        email: 'baayoo71@naver.com', products: []
        }
    ],

};
const putBasket = ({ productId, price, title, imageurl }, userEmail) => {
    console.log(productId, userEmail)
    basketStore._baskets.map(e => {
        if (e.email == userEmail) {
            e.products = [...e.products, {
                id : productId,
                price : price,
                title : title,
                imageurl : imageurl,

            }];
            console.log('e.products', e.products);
        }
    });
}

const getBasket = (userEmail) => {
    return basketStore._baskets.map(e => {
       if(e.email == userEmail) {
           return e.products;
       }
    })
    
}

const deleteCart = (productId, userEmail) => {
    console.log('id',productId);
     basketStore._baskets.map(e=> {
         if(e.email == userEmail && productId == undefined ) {
            return e.products = [];
         }
         else if(e.email == userEmail) {
            return e.products.splice(e.products.indexOf(productId),1);
         }
         
     })
}

module.exports = {
    putBasket,
    getBasket,
    deleteCart,
}

// get baskets() {
    //     return this._baskets;
    // },

    // addProductToBasket(product, count) {
    //     const itemIndex = this._baskets.findIndex(item => item.id === product.id);
    //     if (itemIndex < 0) {
    //         this._baskets.push({ 
    //             ...product,
    //             'amount': count
    //         });
    //         return;
    //     }
    //     this._baskets[itemIndex].amount += count;
    // },

    // deleteBasket() {
    //     this._baskets = [];
    // },
    

    // oneDeleteBasket(productId) {
    //     const deleteResult = this._baskets.filter(item => item.id != productId);
    //     this._baskets = deleteResult;
    // },

    // selectDeleteBasket(productId) {
    //     const deleteResult = this._baskets.filter(item => item.id != productId);
    //     this._baskets = deleteResult;
    // },

    // toggleItem(productList,taskId) {
    //     return productList.map(element => {
    //         if (element.id == taskId) {
    //             element.completed = !element.completed;
    //         }

    //         return element
    //     });

    // },
    // toggleDeleteItem(checkItem) {
    //     const checkDeleteItem = checkItem.filter(product => !product.completed == true);
    //     this._baskets = checkDeleteItem;

    // },
    // priceTotal() {
    //     console.log(this._baskets);
    //     let total = this._baskets.map(item => item.price * item.amount);
    //     let sum = total.reduce(function (pre, value) {
    //         return pre + value;

    //     });
    //     return sum;
    // }
