import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Purchase from '../stores/PurchaseStore'

function PurchaseProduct({ product }) {
    return (
        <>
            <Link to={`/products/${product.id}`}>
                <div>{product.title}</div> {product.price * product.amount}원/{product.amount}개
                <img src={product.imageurl}
                    alt=""
                    width="15%"
                />


            </Link>
            <h2>입금 대기중</h2>
        </>
    );
};
export default PurchaseProduct;