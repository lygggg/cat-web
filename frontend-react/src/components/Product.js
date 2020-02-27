import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import ItemName, { PriceName } from '../lib/ItemName';



function Product({ product }) {
  return (
    <>
    <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <div style={{border:'1px solid #e0e0e0', textAlign: 'center', margin:'10px' }}>
          <img src={product.imageurl}
            alt=""
            width="50%"
            height="200px" />
        </div>
      <div>
          <ItemName>{product.title}</ItemName>
          <PriceName style={{ textAlign: 'center' }}>{product.price}원</PriceName>
          
      </div>
      {product.amount <= 50 && product.amount > 0 ?  
      <StatusDiv style={{ color: 'red' }}>품절임박</StatusDiv> : <StatusDiv></StatusDiv>}
      {product.amount === 0 ?  
      <StatusDiv style={{ color: 'blue' }}>재고 없음</StatusDiv> : <></>}
      </Link>
    </>
  );
}

const StatusDiv = styled.div`
  text-align: center;
`;
export default Product;
