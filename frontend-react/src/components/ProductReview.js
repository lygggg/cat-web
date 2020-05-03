import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function ProductRewview({ review }) {
  return (
    <div style={{ marginBottom: '60px' }}>
      <div style={{ display: "flex" }}>
        <div style={{ padding: "8px" }}>
          <img src="/public/image/profile-image.png" />
        </div>
        <div style={{ padding: "8px" }}>
          <EmailDiv>{review.email}</EmailDiv>
          <div>
            {Array(4)
              .fill(1)
              .join("")
              .padStart(5, 0)
              .split("")
              .reverse()
              .map((e, i) => (
                <span key={i}>
                  {e === "1" ? (
                    <img src={"/public/image/star.png"} width="5%" />
                  ) : (
                    <img src={"/public/image/graystar.png"} width="5%" />
                  )}
                </span>
              ))}
            <span style={{ fontSize: "5px" }}>{review.date}</span>
          </div>
        </div>
      </div>
      <TitleDiv>{review.productTitle}</TitleDiv>
      <div style={{ marginBottom: "19px" }}>
        <img src={review.imageUrl} width='30%' />
      </div>
      <TextDiv>{review.reviewText}</TextDiv>
    </div>
  );
}

const EmailDiv = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #111;
`;

const TitleDiv = styled.div`
  width: 100%;
  margin-top: 15px;
  font-size: 12px;
  color: #888;
  margin-bottom: 15px;
`;

const TextDiv = styled.div`
  font-size: 13px;
  color: #111;
`;

export default ProductRewview;
