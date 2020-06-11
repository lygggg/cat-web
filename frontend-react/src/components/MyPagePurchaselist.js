import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LeftMenu from "./LeftMenu";
import { useHistory } from "react-router-dom";

import PurchaseProduct from "./PurchaseProduct";
import Bottom from "./Bottom";
import { getPurchase } from "../service/purchaseService";
import { userAuth } from "../service/userService";

import { MainDiv } from "../lib/Grid";
import { MenuButton } from "../lib/Button";
import "../css/MyPagePurchaselist.css";
import { DescriptionName } from "../lib/ItemName";

function PurchaseList() {
  const [purchaseList, setPurchaseList] = useState([]);
  const history = useHistory();

  const fetchPurchase = async () => {
    const item = await getPurchase();
    setPurchaseList(item.data.purchases);
  };

  useEffect(() => {
    checkLoign();
    fetchPurchase();
  }, []);

  const checkLoign = async () => {
    const checkSession = await userAuth();
    if (checkSession.login === false) {
      localStorage.removeItem("isLogin");
      history.push('/');
    }
  };

  return (
    <>
      <MainDiv
        style={{
          height: "2000px",
          width: "100%",
          minWidth: "1500px",
          marginBottom: "350px",
        }}
      >
        <div style={{ width: "1230px", margin: "auto", paddingTop: "40px" }}>
          <LeftMenu />
          <div style={{ float: "right" }}>
            <OrderDiv>
              <h2>주문목록/배송조회</h2>
              <div>
                <MenuButton className="menu-btn">전체</MenuButton>
                <MenuButton className="menu-btn">배송상품</MenuButton>
                <MenuButton className="menu-btn">여행상품</MenuButton>
                <MenuButton className="menu-btn">티켓상품</MenuButton>
              </div>
              <FrameDiv>
                {purchaseList.map((it) => {
                  return (
                    <div key={it._id}>
                      <DateDiv>주문일 {it.date}</DateDiv>
                      {it.products.map((i) => {
                        return (
                          <ItemDiv key={i._id}>
                            <PurchaseProduct product={i} />
                          </ItemDiv>
                        );
                      })}
                    </div>
                  );
                })}
              </FrameDiv>
            </OrderDiv>
            <ImgDiv>
              <img
                style={{ width: "800px" }}
                src="/public/image/order-status.png"
              />
              <FlexDiv>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
              </FlexDiv>
            </ImgDiv>
            <TextDiv>
              <h3>취소/반품/교환 신청 전 확인해주세요!</h3>
              <h4>취소</h4>
              여행/레저/숙박 상품은 취소 시 수수료가 발생할 수 있으며,
              취소수수료를 확인하여 2일 이내(주말,공휴일 제외) 처리결과를 문자로
              안내해드립니다. (당일 접수 기준, 마감시간 오후 4시) 문화 상품은
              사용 전날 24시까지 취소 신청 시 취소수수료가 발생되지않습니다.
              <h4>반품</h4>
              상품 수령 후 7일 이내 신청하여 주세요. 상품이 출고된 이후에는 배송
              완료 후, 반품 상품을 회수합니다.
              설치상품/주문제작/해외배송/신선냉동 상품 등은 고객센터에서만 반품
              신청이 가능합니다.
              <h4>교환</h4>
              상품의 교환 신청은 고객센터로 문의하여 주세요.
            </TextDiv>
          </div>
        </div>
      </MainDiv>
      <Bottom />
    </>
  );
}

const DateDiv = styled.div`
  font-size: 17px;
  background-color: #f9f9f9;
  margin: 7px;
  padding: 20px;
`;

const FrameDiv = styled.div`
  display: grid;
  grid-gap: 50px;
`;

const ItemDiv = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #e0e0e0;
`;

const OrderDiv = styled.div`
  width: 1000px;
  height: auto;
  border: 1px solid #e0e0e0;
  padding: 20px;
  box-sizing: border-box;
`;

const ImgDiv = styled.div`
  width: 1000px;
  margin: 24px auto 0 auto;
  box-sizing: border-box;
  padding: 30px;
  border: 1px solid rgb(224, 224, 224);
  display: grid;
  justify-content: center;
  align-items: center;
`;

const TextDiv = styled.div`
  display: grid;
  width: 1000px;
  margin: 24px auto 0 auto;
  box-sizing: border-box;
  padding: 30px;
  border: 1px solid rgb(224, 224, 224);
  display: grid;

  align-items: center;
  background: #f3f3f3;
`;
const FlexDiv = styled.div`
  display: flex;
  text-align: -webkit-center;
`;

export default PurchaseList;
