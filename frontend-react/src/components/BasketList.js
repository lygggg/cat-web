import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Product from './BasketProduct';

import styled from 'styled-components';

import { getCart, deleteCart, toggleItem } from '../service/basketService';
import { createPurchase as buyItem } from '../service/purchaseService';

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
    grid-template-columns: 100px 770px 50px;
    grid-template-rows: 125px 10px ;
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

function BasketList() {
  const [baskets, setBaskets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const fetchBaskets = async () => {
    const items = await getCart();
    let price = 0;
    setBaskets(items.data.baskets[0]);
    items.data.baskets[0].map((e) => {
      price += e.price;
    });
    setTotalPrice(price);
  };

  async function allRemove() {
    await deleteCart();
    fetchBaskets();
  }

  async function handleSelectDelete(productId) {
    await deleteCart(productId);
    fetchBaskets();
  }

  async function handleCheck(productId) {
    await toggleItem(productId);
    fetchBaskets();
  }

  async function selectRemove() {
    await deleteCart('체크삭제');
    fetchBaskets();
  }

  async function selectBuy() {
    const buyList = baskets.filter((e) => e.completed === true);
    await buyItem(buyList[0]);
  }


  useEffect(() => {
    fetchBaskets();
    setBaskets(baskets.map((i) => {
      i.completed = false;
      return i;
    }));
  }, [setBaskets]);

  return (
        <Div>
        <h1>장바구니</h1>
            <h2>내 장바구니 목록</h2>

            <Link to='billingpage'><Button onClick={selectBuy}>구매 하기</Button></Link>
            <Button>쇼핑 계속하기</Button>

            <div style={{ width: '100%' }}>
            </div>
            <GridInfo>
                <span>전체상품</span>
                <span>상품정보</span>
                <span>상품금액</span>
            </GridInfo>
            {baskets.map(basket =>
                <Grid key={basket.id}>
                    <input type='checkbox' checked={basket.completed}
                        onChange={() => handleCheck(basket.id)} />
                    <Product onDeleteClick={handleSelectDelete} product={basket} />
                </Grid>
            )}
            <Button onClick={allRemove}>전체삭제</Button>
            <Button onClick={selectRemove}>선택삭제</Button>

            <div>총 금액: {totalPrice}</div>

        </Div>
  );
}

export default BasketList;
