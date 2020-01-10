
const basketStore = {
    _baskets: [
        {
        email: 'baayoo71@naver.com', products: []
        }
    ],
};
const putBasket = ({ productId, price, title, imageurl, productCount }, userEmail) => {
    basketStore._baskets.map(e => { // 같은값이 있을때 갯수만 추가
        e.products.forEach(i => {
          if(i.id == productId) {
              i.price += price*productCount;
              i.count += productCount;
          }
      })

        if (e.email == userEmail) { // 아이디와 패스워드가 같을경우 장바구니에 상품 넣기
            e.products = [...e.products, {
                id : productId,
                price : price * productCount,
                title : title,
                imageurl : imageurl,
                count : productCount,
                completed : false,
            }];

            e.products = e.products.filter((item, i) => { // 중복제거
                return e.products.findIndex((item2, j) => {
                  return item.id === item2.id;
                }) === i;
              });
        }
    }
    
    
    );
}

const getBasket = (userEmail) => {
    if(userEmail == undefined) {
        
        return [[]];
    }
    return basketStore._baskets.map(e => {
       if(e.email == userEmail) {
           return e.products;
       }

    })
}

// const findUserBasket = (userEmail) => {
//     //맞는 아이디의 배열을 찾아주는 함수
//     const array = [];
//    basketStore._baskets.filter(e => {
//        if(e.email == userEmail) {
//            array = e.products;
//        }
//     })
//     return array;
// }

const deleteCart = (productId, userEmail) => {
     basketStore._baskets.map(e=> {

         if(e.email == userEmail && productId == '체크삭제') {
            const checkDeleteItem = e.products.filter(i=> 
                !i.completed == true 
                //  if(i.completed == true) {
                //     e.products.splice(e.products.indexOf(i),1);
                //  }
             )
             console.log(checkDeleteItem);
            e.products = checkDeleteItem
         }

        else if(e.email == userEmail && productId == null ) {
             console.log('전체삭제');
            return e.products = [];
         }

         else if(e.email == userEmail) {
             console.log('선택삭제');
             e.products.map(i=> { 
                if(i.id == productId){
                    e.products.splice(e.products.indexOf(i),i.count);
                }
            })
         }

     })
}

const toggleItem = (userEmail,productId) => {
         basketStore._baskets.map(element => {
            if(element.email == userEmail) {
                element.products.map(e=> {
                    
                    if(e.id == productId) {
                        e.completed = !e.completed;
                    }
                    console.log(e);
                    //아이디와 맞는 아이템을 찾아서 토글체크 프론트엔드에서 실행시켜줘야함.
                })
            }
            

            return element
        });

    }

module.exports = {
    putBasket,
    getBasket,
    deleteCart,
    toggleItem,
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

    // toggleItem(productList,productId) {
    //     return productList.map(element => {
    //         if (element.id == productId) {
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
