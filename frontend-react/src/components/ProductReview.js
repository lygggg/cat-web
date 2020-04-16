import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import productStore from "../stores/ProductStore";

function ProductRewview({ review }) {
 

  return (
    <>
    <img src='/public/image/profile-image.png'/>
      <div>{review.email}</div>
      {Array(4)
        .fill(1)
        .join("")
        .padStart(5, 0)
        .split("")
        .reverse()
        .map((e, i) => (
          <span key={i}>
            {e === "1" ? (
              <img src={"/public/image/star.png"} width="10%" />
            ) : (
              <img src={"/public/image/graystar.png"} width="10%" />
            )}
          </span>
        ))}
      <div>{review.date}</div>
      <img src={review.imageUrl} />
      <div>{review.reviewText}</div>
    </>
  );
}

export default ProductRewview;
