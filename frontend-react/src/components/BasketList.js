import React, { useState, useEffect } from 'react';
import basket from '../stores/BasketStore';
import Product from './Product';

function ShoppingBasket() {
    const [ListBasket, setListBasket] = useState([]);
    function allRemove() {
        console.log('전체삭제 버튼클릭')
        setListBasket([]);
    }
    

    useEffect(() => {
        setListBasket(basket.baskets);
     
    }, [setListBasket]
    );
    return (
        <>
            <h1>장바구니</h1>
            <h2>내 장바구니 목록</h2>
            <button onClick={allRemove}>전체삭제</button>
            <button>쇼핑 계속하기</button>
            {ListBasket.map(basket =>
                <li key={basket.id}>
                    <Product product={basket} />
                </li>
            )}
        </>
    );


}
export default ShoppingBasket;