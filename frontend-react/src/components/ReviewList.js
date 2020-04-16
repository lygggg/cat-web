import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import styled from "styled-components";

import ProductReview from "./ProductReview";

import { getReviewList } from "../service/reviewService";

function ReviewList({ productId }) {
  const [reviewList, setReviewList] = useState([]);

  useEffect(() => {
    fetchReviewList();
  },[]);
  
  const fetchReviewList = async () => {
    const list = await getReviewList(productId);
    setReviewList(list.reviewProduct);
  };

  return (
    <div
      style={{
        width: "1000px",
        height: "auto",
        border: "0.2px solid #ddd",
      }}
    >
      <div style={{ padding: "30px 40px" }}>
        <div style={{ display: "flex", placeContent: "space-between" }}>
          <H4>상품평</H4>
        </div>
        <div style={{ borderTop: "3px solid" }}>
          <div
            style={{
              fontWeight: "bold",
              placeItems: "center",
              gridTemplateColumns: "160px 580px 150px",
              height: "30px",
              background: "#eee",
              display: "grid",
            }}
          ></div> 
          {reviewList.length === 0 ? (
          <NeverDiv>등록된 문의가 없습니다.</NeverDiv>
        ) : (
          reviewList.map((review) => (
            <Grid key={review._id}>
          <div>
            <ProductReview review={review}/>
          </div>  
          </Grid>
          ))
        )}
        {reviewList.map((review) => (
            <Grid key={review._id}>
          <div>
            <ProductReview review={review}/>
          </div>  
          </Grid>
          ))}
        </div>
      </div>
    </div>
  );
}

const NeverDiv = styled.div`
  display: flex;
  place-content: center;
  height: 300px;
  align-items: center;
`;

const H4 = styled.h4`
  margin-top: 26px;
  margin-bottom: 14px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 170px 580px 130px;
  grid-template-rows: 125px 10px;
  justify-items: center;
  border-bottom: 0.2px solid;
`;

export default ReviewList;
