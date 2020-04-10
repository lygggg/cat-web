import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getReviewProduct as getProduct } from '../service/reviewService';

import LeftMenu from './LeftMenu';

import { MainDiv } from "../lib/Grid";
import { MenuButton } from "../lib/Button";
import "../css/MyPagePurchaselist.css";
import { useParams } from "react-router-dom";

function WriteReviewPage() {
    const { productId } = useParams();
    const [ReviewProduct, setReviewProduct] = useState([]);

    const fetchReview = async () => {
        const reviewProduct = await getProduct(productId);
        setReviewProduct(reviewProduct.reviewProduct.products[0]);
      };

      useEffect(() => {
        fetchReview();
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
            <div>
              {ReviewProduct.title}
            </div>
          </OrderDiv>
        </div>
      </div>
    </MainDiv>
  );
}

const OrderDiv = styled.div`
  width: 1000px;
  height: auto;
  border: 1px solid #e0e0e0;
  padding: 20px;
  box-sizing: border-box;
`;

export default WriteReviewPage;