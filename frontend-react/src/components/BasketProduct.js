import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BoldName } from '../lib/ItemName';

const Div = styled.div`
    display: flex;
    align-items: center;
    color: #777881;
    text-align: right;
    letter-spacing: 0;
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 600px 100px;

`;

const Button = styled.button`
    background-color: white;
    color: #3D82F7;
    border: 1px solid #3D82F7;
    margin: 10px;
    height: 25px;
    width: 45px;

`;


function BasketProduct({ product, onDeleteClick }) {

    return (
        <>

            <Link to={`/products/${product.id}`} style={{textDecoration: 'none'}}>
                <Grid>
                    <Div>
                        <img src={product.imageurl}
                            alt=""
                            width="20%" />
                            
                        <BoldName>{product.title} {product.count}개</BoldName>
                    </Div>
                    <Div style={{justifyContent:'center'}}>
                        {product.price}원
                    </Div>
                </Grid>
            </Link>
            <Button onClick={() => { onDeleteClick(product.id) }}>삭제</Button>

        </>
    );

}
export default BasketProduct;

