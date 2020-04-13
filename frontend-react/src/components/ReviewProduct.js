import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 200px 500px 200px;
  grid-template-rows: 200px;
  align-items: center;
  justify-items: center;
`;

const Button = styled.button`
  width: 120px;
  height: 38px;
  border: none;
  background-color: #346aff;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  outline: none;
`;

function ReviewProduct({ product }) {
  return (
    <Grid>
      <Link to={`/products/${product.id}`}>
        <div style={{ display: "block", textAlign: "center" }}>
          <img src={product.imageurl} alt="" width="70%" />
        </div>
      </Link>
      <Link
        to={`/products/${product.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <div>{product.title}</div>
        {product.count}개
      </Link>
      <div>
        <Link to={`/review/${product._id}`}>
          <Button>
            <div>리뷰작성</div>
          </Button>
        </Link>
      </div>
    </Grid>
  );
}
export default ReviewProduct;
