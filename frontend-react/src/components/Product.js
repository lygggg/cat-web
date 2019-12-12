import React from 'react';

import { Link } from 'react-router-dom';


function Product({ product }) {
    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <img src={product.imageurl}
                    alt=""
                    width="50%" />
            </div>
            <div>
                <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
                    <div>{product.title}</div>
                    <div style={{ textAlign: 'center' }}>{product.price}원</div>
                </Link>
            </div>
        </>
    );

}
export default Product;