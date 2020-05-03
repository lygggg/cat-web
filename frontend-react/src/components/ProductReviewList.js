import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LeftMenu from "./LeftMenu";

import ReviewProduct from "./ReviewProduct";
import Bottom from './Bottom';
import { getPurchase } from "../service/purchaseService";

import { MainDiv } from "../lib/Grid";
import "../css/MyPagePurchaselist.css";

function ProductReview() {
  const [reviewableList, setReviewableList] = useState([]);
  const [reviewMenu, setReviewMenu] = useState(true);
  
  const fetchPurchase = async () => {
    const item = await getPurchase(reviewMenu);
    setReviewableList(item.data.purchases);
  };

  useEffect(() => {
    fetchPurchase();
  }, [reviewMenu]);

  return (
    <>
    <MainDiv style={{ height: 'auto',marginBottom: '1600px' }}>
      <div style={{ width: "1230px", margin: "auto", paddingTop: "40px" }}>
        <LeftMenu />
        <div style={{ float: "right" }}>
          <OrderDiv>
            <h2>구매후기</h2>
            <div></div>
            <FrameDiv>
              {reviewableList.length === 0 ? (
                <NeverDiv>등록된 상품평이 없습니다.</NeverDiv>
              ) : (
                reviewableList.map((it) => {
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
                })
              )}
            </FrameDiv>
          </OrderDiv>
        </div>
      </div>
    </MainDiv>
    <Bottom />
    </>
  );
}

const NeverDiv = styled.div`
  display: flex;
  place-content: center;
  height: 300px;
  align-items: center;
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
