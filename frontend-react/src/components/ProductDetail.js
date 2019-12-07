import React from 'react';
import { useParams, Link } from 'react-router-dom';

import productStore from '../stores/ProductStore';
import BasketStore from '../stores/BasketStore';
import PurchaseStore from '../stores/PurchaseStore'

const buyItem = (product) => {
    PurchaseStore.deleteList();
    PurchaseStore.createPurchases(product);
    console.log(PurchaseStore.purchases);
}
const putCart = async (product) => {
    console.log("장바구니 등록버튼을 클릭했다." + product.title);
    BasketStore.createBasket(product);


}

function ProductDetail() {

    const { productId } = useParams();
    const product = productStore.getProduct(productId);
    const { imageurl, account, phoneNumber, title, description, price } = product


    return (
        <>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h3>{description}</h3>
            <Link to='/billingpage'><button onClick={() => buyItem(product) }>상품 구매</button></Link>
            <button onClick={() => putCart(product)}>장바구니 추가</button>
            <img
                src={imageurl}
                alt=""
                width="100%"
            />
            <div>계좌번호: {account}</div>
            <div>핸드폰 번호: {phoneNumber}</div>
        </>
    );
}
export default ProductDetail;