import React, { useState, useEffect } from "react";
import styled from "styled-components";


import LeftMenu from './LeftMenu';

import ReviewProduct from './ReviewProduct';
import { getPurchase } from "../service/purchaseService";

import { MainDiv } from "../lib/Grid";
import { MenuButton } from "../lib/Button";
import "../css/MyPagePurchaselist.css";

function ProductReview() {
    const [purchaseList, setPurchaseList] = useState([]);
    const fetchPurchase = async () => {
        const item = await getPurchase();
        setPurchaseList(item.data.purchases);
      };

      useEffect(() => {
        fetchPurchase();
      }, []);
    
    return (
        <MainDiv style={{ height: "1500px" }}>
      <div style={{ width: "1230px", margin: "auto", paddingTop: "40px" }}>
        <LeftMenu/>
        <div style={{ float: "right" }}>    
          <OrderDiv>    
            <h2>구매후기</h2>
            <div>
              <MenuButton className="menu-btn">구매후기   작성하기</MenuButton>
            </div>
            <FrameDiv>
            {purchaseList.map((it) => {
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
            </FrameDiv>
          </OrderDiv>


        </div>
      </div>
    </MainDiv>
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

export default ProductReview;