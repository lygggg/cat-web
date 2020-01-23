import { basketStore } from '../stores/BasketStore';

class BasketRepository {
    constructor() {
    
    }
    
    async getAll(userEmail) {
        if (userEmail === undefined) {
            return [[]];
          }
          return basketStore._baskets.map((e) => {
            if (e.email === userEmail) {
              return e.products;
            }
          }).filter((e) => e !== undefined);
    }

    async putOne({
        id, title, catagory, price, description, imageurl, phoneNumber, account, count,
      }, userEmail) {
        basketStore._baskets.map((e) => { // 같은값이 있을때 갯수만 추가
            e.products.forEach((i) => {
              if (i.id === id && e.email === userEmail) {
                i.price += price * count;
                i.count += count;
              }
            });
        
            if (e.email == userEmail) { // 아이디와 패스워드가 같을경우 장바구니에 상품 넣기
              e.products = [...e.products, {
                id: id,
                price: price * count,
                title: title,
                imageurl: imageurl,
                count: count,
                completed: false,
              }];
        
              e.products = e.products.filter((item, i) => { // 중복제거
                return e.products.findIndex((item2, j) => {
                  return item.id === item2.id;
                }) === i;
              });
            }
          });
    }

    async deleteOne({ productId, userEmail }) {
        basketStore._baskets.map((e) => {
            if (e.email === ulserEmail && productId === '체크삭제') {
              const checkDeleteItem = e.products.filter((i) => !i.completed === true);
              e.products = checkDeleteItem;
            } else if (e.email === userEmail && productId == null) {
              return e.products = [];
            } else if (e.email === userEmail) {
              e.products.map((i) => {
                if (i.id === productId) {
                  e.products.splice(e.products.indexOf(i), i.count);
                }
              });
            }
          });
    }

    async toggleOne({ userEmail, productId }) {
        basketStore._baskets.map((element) => {
            if (element.email === userEmail) {
              element.products.map((e) => {
                if (e.id === productId) {
                  e.completed = !e.completed;
                } // 아이디와 맞는 아이템을 찾아서 토글체크 프론트엔드에서 실행시켜줘야함.
              });
            }
            return element;
          });
    }
}

export default BasketRepository;