import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import productStore from '../stores/ProductStore';
import BasketStore from '../stores/BasketStore';
import PurchaseStore from '../stores/PurchaseStore'

const buyItem = (product, count) => {
    PurchaseStore.deleteList();
    PurchaseStore.createPurchases(product,count);
    console.log(PurchaseStore.purchases);
}
const putCart = async (product,count) => {
    console.log("장바구니 등록버튼을 클릭했다." + product.title);
    BasketStore.addProductToBasket(product,count);



}

function ProductDetail() {
    const [count, setcount] = useState(1);
    const { productId } = useParams();
    const product = productStore.getProduct(productId);
    const { imageurl, account, phoneNumber, title, description, price } = product

    function handlePlus() {
        setcount(count + 1);
    }
    function handleMinus() {
        if(count>1){
        setcount(count - 1);
        }
    }
    return (
        <>
            <h1>{title}</h1>
            <h2>{price}</h2>
            <h3>{description}</h3>
            <form>

                <fieldset style={{ width: '12%' }}>
                    <div>개수<input type='text' className='count' value={count} size='3' readOnly /><a onClick={() => handlePlus()}>+</a>
                        <a onClick={() => handleMinus()}>-</a></div>



                </fieldset>


            </form>
            <Link to='/billingpage'><button onClick={() => buyItem(product, count)}>상품 구매</button></Link>
            <button onClick={() => putCart(product, count)}>장바구니 추가</button>
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