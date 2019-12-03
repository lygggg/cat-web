import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Purchase from '../stores/PurchaseStore'

function PurchaseProduct(product) {
    <>
        <Link to={`/purchase/${product.id}`}>
            {product.title}
            <img src={product.imageurl}
                        alt=""
                        width="15%"
            />
            <h2>입금 대기중</h2>
            
        </Link>
    </>
    
}