import React, { useState, useEffect } from 'react';
import basket from '../stores/BasketStore';
import Product from './BasketProduct';


function ShoppingBasket(props) {

    const [ListBasket, setListBasket] = useState([]);
    const [checked, setChecked] = useState(basket._basket);



    async function allRemove() {
        await basket.deleteBasket();
        setListBasket(basket.baskets);
    }
    async function handleSelectDelete(productId) {
        await basket.oneDeleteBasket(productId);

        setListBasket(basket.baskets);
    }
    async function handleCheckDelete(productId) {
        await setChecked(basket.toggleItem(ListBasket, productId));

    }





    async function selectRemove() {
        await basket.toggleDeleteItem(checked);
        setListBasket(basket._basket);

    }

    useEffect(() => {
        setListBasket(basket.baskets);
        console.log(ListBasket);

    }, [setListBasket]
    );
    return (
        <>
            <h1>장바구니</h1>
            <h2>내 장바구니 목록</h2>
            <button onClick={allRemove}>전체삭제</button>
            <button onClick={selectRemove}>선택삭제</button>
            <button>쇼핑 계속하기</button>
            {ListBasket.map(basket =>
                <li key={basket.id}>
                    <input type='checkbox' checked={basket.completed} onChange={() => handleCheckDelete(basket.id)} />
                    <Product onDeleteClick={handleSelectDelete} product={basket} />

                </li>
            )}
        </>
    );


}
export default ShoppingBasket;