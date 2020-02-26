import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Product from "./BasketProduct";
import groupBy from "lodash.groupby";

import styled from "styled-components";
import { MainDiv } from "../lib/Grid";

import { getCart, deleteCart } from "../service/basketService";
import productStore from "../stores/ProductStore";

const Div = styled.div`
  margin: auto;
  width: 1000px;
  height: auto;
  border: 1px solid #e0e0e0;
  padding: 20px;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 100px 770px 50px;
  grid-template-rows: 125px 10px;
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

const ButtomButton = styled.button`
  display: grid;
  height: 60px;
  width: 216px;
  background: #0073e9;
  color: #fff;
  border: 2px solid #0073e9;
  border-radius: 4px;
  font-weight: 500;
  font-size: 22px;
  justify-self: center;
`;

const ButtonDiv = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: 260px 260px;
  justify-content: center;
`;

function BasketList() {
  const [baskets, setBaskets] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const history = useHistory();

  const refreshBaskets = async () => {
    const items = await getCart();
    const products = await groupBy(items.data.baskets[0].products, "_id");

    return setBaskets(
      Object.values(products).map(i => {
        // 장바구니 리스트 정렬
        return { ...i[0], count: i.length, selected: false };
      })
    );
  };

  const fetchBaskets = async () => {
    const items = await getCart();
    const products = await groupBy(items.data.baskets[0].products, "_id");
    let price = 0;

    setBaskets(
      Object.values(products).map(i => {
        // 장바구니 리스트 정렬
        return { ...i[0], count: i.length, selected: false };
      })
    );

    Object.values(products)
      .map(i => {
        // 가격출력
        return { ...i[0], count: i.length };
      })
      .forEach(i => {
        price += i.count * i.price;
      });

    setTotalPrice(price);
  };

  const allRemove = async () => {
    await deleteCart();
    fetchBaskets();
  };

  const ChangeTotalPrice = price => {
    setTotalPrice(totalPrice + price);
    refreshBaskets();
  };
  async function handleSelectDelete(productId) {
    await deleteCart(productId);
    fetchBaskets();
  }

  async function handleCheck(productId, cart) {
    setBaskets(
      cart.map(item => {
        if (item.id === productId) {
          item.selected = !item.selected;
        }
        return item;
      })
    );
  }

  const handleAllCheck = (cart) => {
    setBaskets(
      cart.map(item => {
        item.selected = !item.selected;
        return item;
      })
    )
  }

  async function checkRemove() {
    await deleteCart(
      baskets
        .filter(i => i.selected == true)
        .map(e => {
          return e._id;
        })
    );
    fetchBaskets();
  }

  function selectBuy() {
    const products = baskets.filter(e => e.selected === true);
    if (products.length == 0) {
      alert('상품을 선택해주세요.');
    }
    if (products.length !== 0) {
      productStore.putPayProducts(products);
      history.push('/payment');
    }
  }

  useEffect(() => {
    fetchBaskets();
    setBaskets(
      baskets.map(i => {
        i.selected = true;
        return i;
      })
    );
  }, [setBaskets]);

  return (
    <MainDiv style={{ paddingTop: "40px" }}>
      <Div>
        <h1>장바구니</h1>
        <h2>내 장바구니 목록</h2>
        <div style={{ width: "100%" }}></div>
        <GridInfo>
          <span>
            <input
            style={{ marginRight: '5px' }}
              type="checkbox"
              onChange={() => handleAllCheck(baskets)}
            />
            전체상품
          </span>
          <span>상품정보</span>
          <span>상품금액</span>
        </GridInfo>
        {baskets.map(basket => (
          <Grid key={basket.id}>
            <input
              type="checkbox"
              checked={basket.selected}
              onChange={() => handleCheck(basket.id, baskets)}
            />
            <Product
              onDeleteClick={handleSelectDelete}
              product={basket}
              onChangeCount={ChangeTotalPrice}
            />
          </Grid>
        ))}
        <Button onClick={allRemove}>전체삭제</Button>
        <Button onClick={checkRemove}>선택삭제</Button>

        <div>총 금액: {totalPrice}</div>
        
      </Div>
      <ButtonDiv>
          <ButtomButton type="button" onClick={selectBuy}>
            구매 하기
          </ButtomButton>
        <Link to='/'>
        <ButtomButton>쇼핑 계속하기</ButtomButton>
        </Link>
        </ButtonDiv>
    </MainDiv>
  );
}

export default BasketList;
