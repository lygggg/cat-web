import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Purchase from '../stores/PurchaseStore'
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 200px 500px 200px;
    grid-template-rows: 200px;
    align-items: center;
    justify-items: center;
`;

const Button = styled.button`
    background-color: #3d82f7;
    color: white;
    border: 1px solid #4386f4;
    border-radius: 3px;
    padding: 5px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 2px;
    
`;

function PurchaseProduct({ product }) {
    return (
        <Grid>
            <Link to={`/products/${product.id}`}>
                <div style={{display: 'block', textAlign: "center"}}><img src={product.imageurl} 
                    alt=""
                    width="70%"
                /></div>
            </Link>
            <Link to={`/products/${product.id}`} style={{textDecoration: 'none', color: 'black'}}>
                <div>{product.title}</div> {product.price * product.amount}원/{product.amount}개
            </Link>
            <div>
                <div style={{textAlign:'center', fontWeight: 'bold'}}>입금대기중</div>
                <div><Button>배송조회</Button></div>
                <div><Button>교환신청</Button></div>
                <div><Button>반품신청</Button></div>
                <div><Button>구매후기</Button></div>
            </div>
 
        </Grid>
    );
};
export default PurchaseProduct;