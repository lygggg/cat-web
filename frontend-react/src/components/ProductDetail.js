import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Popup from "reactjs-popup";

import { getProductDetail as getProduct } from "../service/productService";
import ProductStore from "../stores/ProductStore";

import styled from "styled-components";

import {
  MainName,
  PriceName,
  BoldName,
  DescriptionName
} from "../lib/ItemName";
import { Button } from "../lib/Button";
import { putCart } from "../service/basketService";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [count, setcount] = useState(1);
  const { productId } = useParams();
  const { imageurl, account, phoneNumber, title, description, price } = product;
  const history = useHistory();

  const handleBuyItem = async (product, count) => {
    if (product.amount <= 0) {
      alert("품절입니다.");
    }
    if (product.amount > 0) {
      const products = [{ ...product, count }];
      ProductStore.putPayProducts(products);
      history.push("/payment");
    }
  };

  const putProduct = async (product, count) => {
    console.log('fassd')
    await putCart(new Array(count).fill(product._id));
  };

  const getOneProduct = async id => {
    const oneProduct = await getProduct(id);
    setProduct(oneProduct.product[0]);
  };

  useEffect(() => {
    getOneProduct(productId);
  }, []);

  const handlePlus = () => {
    setcount(count + 1);
  };

  const handleMinus = () => {
    if (count > 1) {
      setcount(count - 1);
    }
  };

  return (
    <ItemDetali>
      <div>
        <img src={imageurl} alt="" width="470px" height="552px" />
      </div>
      <ItemDivide>
        <div>
          <MainName>{title}</MainName>
          <BoldName>{description}</BoldName>
        </div>
        <div>
          <PriceName style={{ fontSize: "24px", lineHeight: "40px" }}>
            {price}원
          </PriceName>
          <DescriptionName style={{}}>
            로그인후, 회원할인가와 적립혜택이 제공됩니다.
          </DescriptionName>
          <h4>무료배송</h4>
          {product.amount <= 0 ? <StatusDiv>품절</StatusDiv> : <></>}
        </div>
        <PutDiv>
          <span style={{ margin: "6px" }}>
            <button
              style={{ height: "36px", width: "40px" }}
              onClick={() => handlePlus()}
            >
              +
            </button>
            <input
              style={{ textAlign: "center", height: "30px" }}
              type="text"
              className="count"
              value={count}
              size="3"
              readOnly
            />
            <button
              style={{ height: "36px", width: "40px" }}
              onClick={() => handleMinus()}
            >
              -
            </button>
          </span>
          <Popup on={
            <div>das</div>
          }
          trigger={product.amount <= 0 ? <Button
            style={{ margin: "6px" }}
          >
            품절
          </Button> : <Button
            onClick={() => handleBuyItem(product, count)}
            style={{ margin: "6px" }}
          >
            상품 구매
          </Button>}
          >
          </Popup>
          <Popup
            contentStyle={{ width: "250px", height: "110px" }}
            position="top center"
            onOpen={() => putProduct(product, count)}
            trigger={
              <Button
                style={{ background: "#f0f0f0", margin: "6px" }}
              >
                장바구니 추가
              </Button> 
            }
          >
            <div
              style={{
                display: "grid",
                height: "100px",
                placeContent: "center"
              }}
            >
              <div
                style={{
                  color: "arkslategray",
                  fontSize: "12px",
                  justifySelf: "center"
                }}
              >
                상품이 장바구니에 담겼습니다.
              </div>
              <Button
                style={{ background: "#f0f0f0", margin: "6px" }}
                onClick={() => history.push('/basket')}
              >
                장바구니 바로가기
              </Button>
            </div>
          </Popup>
        </PutDiv>
        <div>
          <DescriptionName>계좌번호: {account}</DescriptionName>
          <DescriptionName>핸드폰 번호: {phoneNumber}</DescriptionName>
        </div>
      </ItemDivide>
    </ItemDetali>
  );
}

const ItemDetali = styled.div`
  display: grid;
  grid-template-columns: 500px 600px;
  grid-template-rows: 600px;
  margin: auto;
  width: 1000px;
  height: 0%;
  border: 1px solid #e0e0e0;
  padding: 20px;
`;

const ItemDivide = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PutDiv = styled.div`
  display: flex;
  margin-right: 10px;
`;

const StatusDiv = styled.div`
  color: red;
  font-size: 20px;
`;

export default ProductDetail;
