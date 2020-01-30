import { basketStore } from "../stores/BasketStore";
import model from "../models/basket.schema";

class BasketRepository {
  constructor() {}

  async getAll(userEmail) {
    if (userEmail === undefined) {
      return [{}];
    }

    const getCart = await model.find({ email: userEmail })
      .populate('products');
    return getCart;
    // return basketStore._baskets.map((e) => {
    //   if (e.email === userEmail) {
    //     return e.products;
    //   }
    // }).filter((e) => e !== undefined);
  }

  async putOne({ _id }, userEmail) {
    await model.update(
      { email: userEmail },
      { $push: { products: _id } }
    );
  }

  async deleteOne({ productId, userEmail }) {
    console.log(userEmail);
    const getCart = await model.find({ email: userEmail })
    console.log('sd',getCart);
    
    // basketStore._baskets.map(e => {
    //   if (e.email === ulserEmail && productId === "체크삭제") {
    //     const checkDeleteItem = e.products.filter(i => !i.completed === true);
    //     e.products = checkDeleteItem;
    //   } else if (e.email === userEmail && productId == null) {
    //     return (e.products = []);
    //   } else if (e.email === userEmail) {
    //     e.products.map(i => {
    //       if (i.id === productId) {
    //         e.products.splice(e.products.indexOf(i), i.count);
    //       }
    //     });
    //   }
    // });
  }

  async toggleOne({ userEmail, productId }) {
    basketStore._baskets.map(element => {
      if (element.email === userEmail) {
        element.products.map(e => {
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
