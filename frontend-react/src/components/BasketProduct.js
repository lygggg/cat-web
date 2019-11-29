import React, { useState } from 'react';

import{ Link } from 'react-router-dom';
import Basket from '../stores/BasketStore'

function BasketProduct({ product, onDeleteClick }) {

    function checkItem(checkbox) {
        
    }

    

    return(
        <>
        <input type='checkbox'  onChange={checkItem()}/>
    <Link to = {`/products/${product.id}`}>
        {product.title} {product.price}원
        <img src={product.imageurl}
        alt=""
        width="20%"/>
        
    </Link>
    <button onClick={() =>{onDeleteClick(product.id)}}>삭제</button>
    
   </>
    ); 
    
}
export default BasketProduct;

