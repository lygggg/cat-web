import React, { useState, useEffect } from 'react';
import basket from '../stores/BasketStore';
import Product from './BasketProduct';
import Purchase from '../stores/PurchaseStore';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Div = styled.div`
    
    margin: auto;
    width: 1000px;
    height: auto;
    border: 1px solid #e0e0e0;
    padding: 20px;
`;
const Grid = styled.div`
    display: grid;
    align-items:center;
    grid-template-columns: 100px 800px 50px;
    grid-template-rows: 125px 60px ;
    justify-items: center;
`;

const GridInfo = styled.div`
        display: grid;
    grid-template-columns: 100px 608px 150px 70px;
    align-items: center;
    justify-items: center;
    grid-template-rows: 50px;
    background-color: #fafafa;
    font-weight: bold;
    border: 1px solid #e0e0e0;
`;

const Button = styled.button`
    background-color: white;
    color: #333;
    border: 1px solid #e0e0e0;
    margin: 10px;

`;

function ShoppingBasket() {
    const [ListBasket, setListBasket] = useState([]);

    let totalPrice = 0;
    if (basket.baskets.length > 0) {
        totalPrice = basket.priceTotal();
    }

    async function allRemove() {
        await basket.deleteBasket();
        setListBasket(basket.baskets);
    }

    async function handleSelectDelete(productId) {
        await basket.oneDeleteBasket(productId);

        setListBasket(basket.baskets);
    }

    async function handleCheck(productId) {
        await setListBasket(basket.toggleItem(ListBasket, productId));
    }

    async function selectRemove() {
        await basket.toggleDeleteItem(ListBasket);
        setListBasket(basket._basket);
    }
    async function selectBuy() {
        Purchase.deleteList();
        
        const buyList = ListBasket.filter(e =>
            e.completed === true
        );

        Purchase.plusPurchase(buyList, new Date()+'');
    }

    useEffect(() => {
        setListBasket(basket.baskets.map(i => { 
            i.completed = false;
            return i;
        }));
    }, [setListBasket]);

    return (
        <Div>
            <h1>장바구니</h1>
            <h2>내 장바구니 목록</h2>
            
            <Link to='billingpage'><Button onClick={selectBuy}>구매 하기</Button></Link>
            <Button>쇼핑 계속하기</Button>
            
            <div style={{width:'100%'}}>
            </div>
            <GridInfo>
            <span>전체상품</span>
            <span>상품정보</span>
            <span>상품금액</span>
            </GridInfo>
            {ListBasket.map(basket =>
                <Grid key={basket.id}>
                    <input type='checkbox' checked={basket.completed} onChange={() => handleCheck(basket.id)} />
                    <Product onDeleteClick={handleSelectDelete} product={basket} />
                </Grid>
            )}
            <Button onClick={allRemove}>전체삭제</Button>
            <Button onClick={selectRemove}>선택삭제</Button>
            
            <div>총 금액: {totalPrice}</div>
        
        </Div>
    );
}

export default ShoppingBasket;