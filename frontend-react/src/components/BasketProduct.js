import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Basket from '../stores/BasketStore'
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    align-items: center;
`;


function BasketProduct({ product, onDeleteClick }) {

    return (
        <>

            <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                <Div>
                <img src={product.imageurl}
                    alt=""
                    width="20%" />
                    
                {product.title} {product.price}원 {product.amount}개
                </Div>
            </Link>
            <button style={{height:'40px'}} onClick={() => { onDeleteClick(product.id) }}>삭제</button>

        </>
    );

}
export default BasketProduct;

