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
        console.log('gfd');
        fetchReview();
      }, []);
    
    return (
        <MainDiv style={{ height: "1500px" }}>
      <div style={{ width: "1230px", margin: "auto", paddingTop: "40px" }}>
        <LeftMenu/>
        <div style={{ float: "right" }}>
        <h2>구매후기</h2>  
          <OrderDiv>
            <div>
              <div>
                구매후기 쓰기
              </div>
            </div>
            <div>
              <img src= {ReviewProduct.imageurl}
              alt=""
              width="20%"
              height="180px"/>
              {ReviewProduct.title}
              {ReviewProduct.description}
              {ReviewProduct.count}개
            </div>
            <div>
            <div>별점</div>
            <div>
              <button>

              </button>
              <button>
                
              </button>
              <button>
                
              </button>
              <button>
                
              </button>
              <button>
                
              </button>
            </div>
            </div>
            <div>구매하기</div>
            <div>사진첨부</div>
            <div>평가</div>
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