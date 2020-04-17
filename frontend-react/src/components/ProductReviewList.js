import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LeftMenu from "./LeftMenu";

import ReviewProduct from "./ReviewProduct";
import { getPurchase } from "../service/purchaseService";

import { MainDiv } from "../lib/Grid";
import "../css/MyPagePurchaselist.css";

function ProductReview() {
  const [reviewableList, setReviewableList] = useState([]);
  const [wroteReviewList, setWroteReviewList] = useState()
  const [reviewMenu, setReviewMenu] = useState(true);
  
  const fetchPurchase = async () => {
    const item = await getPurchase(reviewMenu);
    console.log(item.data.purchases[0].products)
    setReviewableList(item.data.purchases);
  };

  useEffect(() => {
    fetchPurchase();
  }, [reviewMenu]);

  return (
    <MainDiv style={{ height: "1500px" }}>
      <div style={{ width: "1230px", margin: "auto", paddingTop: "40px" }}>
        <LeftMenu />
        <div style={{ float: "right" }}>
          <OrderDiv>
            <h2>구매후기</h2>
            <div>
              <Button onClick={() => { setReviewMenu(true) }} >작성 가능 구매후기</Button>
              <Button onClick={() => { setReviewMenu(false) }} >내가 쓴 구매후기</Button>
            </div>
            {reviewMenu === true ? <FrameDiv>
              {reviewableList.map((it) => {
                return (
                  <div key={it._id}>
                    {it.products.map((i) => {
                      return (
                        <ItemDiv key={i._id}>
                          <ReviewProduct product={i} />
                        </ItemDiv>
                      );
                    })}
                  </div>
                );
              })}
            </FrameDiv> :
            <div>내가 쓴 구매후기</div>
            }
          </OrderDiv>
        </div>
      </div>
    </MainDiv>
  );
}

const Button = styled.button`
  height: 57px;
  width: 50%;
  background-color: #fafafa;
  font-weight: bold;
  border: 1px solid #e0e0e0;
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

export default ProductReview;
