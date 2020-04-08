import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import Popup from "reactjs-popup";

import { getProductDetail as getProduct } from "../service/productService";
import { getQuestion as getQuestionList } from '../service/questionService';
import ProductStore from "../stores/ProductStore";
import ProductQuestion from "./ProductQuestion";

import styled from "styled-components";

import {
  MainName,
  PriceName,
  BoldName,
  DescriptionName,
} from "../lib/ItemName";
import { Button } from "../lib/Button";
import { putCart } from "../service/basketService";

function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [question, setQuestion] = useState([]);
  const [count, setcount] = useState(1);
  const { productId } = useParams();
  const [menu, setMenu] = useState(1);
  const {
    imageurl,
    detailImage,
    account,
    phoneNumber,
    title,
    description,
    price,
    category,
  } = product;
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
    await putCart(new Array(count).fill(product._id));
  };

  const getOneProduct = async (id) => {
    const oneProduct = await getProduct(id);
    setProduct(oneProduct.product[0]);
  };

  const getProductsQuestion = async (id) => {
    const productQuestion = await getQuestionList(id);
    console.log(productQuestion.data.questions);
    setQuestion(productQuestion.data.questions);
  }

  useEffect(() => {
    getOneProduct(productId);
    getProductsQuestion(productId);
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
    <MainDiv>
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
            {product.amount <= 0 ? (
              <Button style={{ margin: "6px" }}>품절</Button>
            ) : (
              <Button
                onClick={() => handleBuyItem(product, count)}
                style={{ margin: "6px" }}
              >
                상품 구매
              </Button>
            )}
            <Popup
              contentStyle={{ width: "250px", height: "110px" }}
              position="top center"
              onOpen={() => putProduct(product, count)}
              trigger={
                <Button style={{ background: "#f0f0f0", margin: "6px" }}>
                  장바구니 추가
                </Button>
              }
            >
              <div
                style={{
                  display: "grid",
                  height: "100px",
                  placeContent: "center",
                }}
              >
                <div
                  style={{
                    color: "arkslategray",
                    fontSize: "12px",
                    justifySelf: "center",
                  }}
                >
                  상품이 장바구니에 담겼습니다.
                </div>
                <Button
                  style={{ background: "#f0f0f0", margin: "6px" }}
                  onClick={() => history.push("/basket")}
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
      <CenterDiv>
        <Ul>
          <Li onClick={() => setMenu(1)}>상품상세</Li>
          <Li onClick={() => setMenu(2)}>상품평</Li>
          <Li onClick={() => setMenu(3)}>상품문의</Li>
          <Li onClick={() => setMenu(4)}>배송/교환/반품</Li>
        </Ul>
        <div>
          <p
            style={{
              color: "black",
              paddingBottom: "10px",
              fontSize: "14px",
              fontWeight: "700",
            }}
          >
            필수 표기정보
          </p>
          <Table>
            <colgroup>
              <col width="150px"></col>
              <col width="340px"></col>
              <col width="150px"></col>
              <col width="*"></col>
            </colgroup>
            <tbody>
              <tr>
                <Th>품명</Th>
                <Td>{category}</Td>
                <Th>모델명</Th>
                <Td>{title}</Td>
              </tr>
              <tr>
                <Th>유통기한</Th>
                <Td>생산일로부터 1년</Td>
                <Th>원산지</Th>
                <Td>한국</Td>
              </tr>
              <tr>
                <Th>A/S 및 소비자 상담 전화번호</Th>
                <Td>이태원센터 고객센터 1111-7079</Td>
              </tr>
            </tbody>
          </Table>
        </div>
        <img
          style={{ justifySelf: "center" }}
          src={detailImage}
          alt=""
          width="1000px"
          height="10006px"
        />
      </CenterDiv>
      <CenterDiv>
        <H4>상품평</H4>
      </CenterDiv>
      <CenterDiv>
      <div style={{ border: '0.2px solid #ddd'}}>
        <div style={{ padding: '30px 40px' }}>
          <div style={{ display: 'flex', placeContent: 'space-between'}}>
        <H4>상품문의</H4>
        <button style={{ color:'#0073e9', border: '1px solid #0073e9', background: '#FFFFFF', alignSelf: 'center' }}>문의하기</button>
        </div>
        <div style={{ borderTop: '3px solid'}}>
        {question.map(quest => (
          <Grid key={quest._id}>
            <ProductQuestion question={quest} />
          </Grid>
        ))}
        </div>
        </div>
        </div>
      </CenterDiv>
    </MainDiv>
  );
}

const CenterDiv = styled.div`
  width: 100%;
  display: grid;
  justify-content: center;
`;

const H4 = styled.h4`
  margin-top: 26px;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #ccc;
  font-size: 1em;
  margin: 0;
`;

const Th = styled.th`
  padding: 12px 16px;
  border-bottom: 1px solid #eee;
  background-color: #fafafa;
  color: #111;
  font-weight: 400;
  font-size: 12px;
  overflow: hidden;
`;

const Td = styled.td`
  white-space: normal;
  word-break: break-all;
  padding: 12px 16px;
  color: #333;
  border-bottom: 1px solid #eee;
  border-right: none;
  border-left: none;
  border-top: none;
  line-height: 17px;
  font-size: 12px;
`;

const Ul = styled.ul`
  border-top: 2px solid #555;
  border-bottom: 1px solid #ccc;
  border-left: 1px solid #ccc;
  width: 100%;
  padding: 0;
`;

const Li = styled.li`
  display: inline-block;
  padding: 15px 20px 14px;
  width: 25%;
  border-right: 1px solid #ccc;
  background-color: #fafafa;
  text-align: center;
  color: #555;
  font-weight: bold;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;
`;

const MainDiv = styled.div`
  display: grid;
  grid-gap: 150px;
`;

const ItemDetali = styled.div`
  display: grid;
  grid-template-columns: 500px 600px;
  grid-template-rows: 600px;
  margin: auto;
  width: 1000px;
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

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 150px 750px 100px;
  grid-template-rows: 125px 10px;
  justify-items: center;
  border-bottom: 0.2px solid;
`;

export default ProductDetail;
