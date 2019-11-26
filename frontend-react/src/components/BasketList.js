import React from 'react';
import basket from '../stores/BasketStore';
import Product from './Product';

function ShoppingBasket() {
    const baskets = basket.baskets;
    return(
        <>
        <h1>장바구니</h1>
        {baskets.map(basket =>
            <li key={basket.id}>
                <Product product={basket}/>
                </li>
                )}
        </>
    );
    
    
}
export default ShoppingBasket;