import React, { useState, useEffect } from 'react';
import basket from '../stores/BasketStore';
import Product from './BasketProduct';
import BasketProduct from './BasketProduct';

function ShoppingBasket(props) {
    const [ListBasket, setListBasket] = useState([]);

    function allRemove() {
        basket.deleteBasket();
        setListBasket(basket.baskets);
    }
    function handleTitleChange(productId) {
        basket.oneDeleteBasket(productId);
        setListBasket(basket.baskets);
    }
   
    useEffect(() => {
        setListBasket(basket.baskets);
        console.log(ListBasket);
     
    }, [ListBasket]
    );
    return (
        <>     
            <h1>장바구니</h1>
            <h2>내 장바구니 목록</h2>
            <button onClick={allRemove}>전체삭제</button>
            <button>쇼핑 계속하기</button>
            {ListBasket.map(basket =>
                <li key={basket.id}>
                    <Product onDeleteClick={handleTitleChange} product={basket} />
                </li>
            )}
        </>
    );


}
export default ShoppingBasket;