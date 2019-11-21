import React from 'react';
import { useParams } from 'react-router-dom';

import productStore from '../stores/productStore';
import Product from './Product';


function ProductDetail() {
 
    const { productId } = useParams();
    const product = productStore.getProduct(productId);
    console.log(Product);
    const { imageurl, account, phoneNumber, title, description, price } = product
    

    return (
        <>
<h1>{title}</h1>
<h2>{price}</h2>
<h3>{description}</h3>
        <img
            src={imageurl}
            alt=""
            width="100%"
        />
<div>계좌번호: {account}</div>
    <div>핸드폰 번호: {phoneNumber}</div>
        </>
    );
}
export default ProductDetail;