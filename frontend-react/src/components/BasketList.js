import React, { useState, useEffect } from 'react';
import basket from '../stores/BasketStore';
import Product from './BasketProduct';
import Purchase from '../stores/PurchaseStore';
import { Link } from 'react-router-dom';

function ShoppingBasket() {
    const [ListBasket, setListBasket] = useState([]);

    let totalPrice = 0;
    if (basket.baskets.length > 0) {
        totalPrice = basket.priceTotal();
    }

    async function allRemove() {
        await basket.deleteBasket();
        setListBasket(basket.baskets);
    }

    async function handleSelectDelete(productId) {
        await basket.oneDeleteBasket(productId);

        setListBasket(basket.baskets);
    }

    async function handleCheck(productId) {
        await setListBasket(basket.toggleItem(ListBasket, productId));
    }

    async function selectRemove() {
        await basket.toggleDeleteItem(ListBasket);
        setListBasket(basket._basket);
    }
    async function selectBuy() {
        Purchase.deleteList();
      const buyList = ListBasket.filter(e =>
            e.completed === true
        );
        Purchase.plusPurchase(buyList);


        
    }

    useEffect(() => {
        setListBasket(basket.baskets.map(i => { 
            i.completed = false;
            return i;
        }));
    }, [setListBasket]);

    return (
        <>
            <h1>장바구니</h1>
            <h2>내 장바구니 목록</h2>
            <button onClick={allRemove}>전체삭제</button>
            <button onClick={selectRemove}>선택삭제</button>
            <Link to='billingpage'><button onClick={selectBuy}>구매 하기</button></Link>
            <button>쇼핑 계속하기</button>
            {ListBasket.map(basket =>
                <li key={basket.id}>
                    <input type='checkbox' checked={basket.completed} onChange={() => handleCheck(basket.id)} />
                    <Product onDeleteClick={handleSelectDelete} product={basket} />
                </li>
            )}
            <div>총 금액: {totalPrice}</div>
        </>
    );
}

export default ShoppingBasket;