import React, { useState } from "react";

import { Link } from "react-router-dom";

import { modifyCount } from "../service/basketService";

import styled from "styled-components";
import { BoldName } from "../lib/ItemName";

function BasketProduct({ product, onDeleteClick, onChangeCount }) {
  const [count, setCount] = useState(product.count);

  const handlePlus = () => {
    setCount(count + 1);
    modifyCount(product._id, +1);
    onChangeCount(product.price);
  };

  const handleMinus = () => {
    if (count > 1) {
      setCount(count - 1);
      modifyCount(product._id, -1);
      onChangeCount(-product.price);
    }
  };

  return (
    <>
      <Grid>
        <Link to={`/products/${product.id}`} style={{ textDecoration: "none" }}>
          <Div>
            <img src={product.imageurl} alt="" width="20%" />
            <BoldName style={{ marginLeft: "40px", textAlign: "justify" }}>
              {product.title}{" "}
            </BoldName>
          </Div>
        </Link>
        <span style={{ placeSelf: "center" }}>
          <AddButton onClick={() => handlePlus()}>+</AddButton>
          <Input
            type="text"
            className="count"
            value={count}
            size="3"
            readOnly
          />
          <AddButton onClick={() => handleMinus()}>-</AddButton>
        </span>
        <Div style={{ justifyContent: "center" }}>
          {count * product.price}원
        </Div>
      </Grid>
      <Button
        onClick={() => {
          onDeleteClick(product._id);
        }}
      >
        삭제
      </Button>
    </>
  );
}

const Div = styled.div`
  display: flex;
  align-items: center;
  color: #777881;
  text-align: right;
  letter-spacing: 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 500px 100px 100px;
`;

const Button = styled.button`
  background-color: white;
  color: #3d82f7;
  border: 1px solid #3d82f7;
  margin: 10px;
  height: 25px;
  width: 45px;
`;

const AddButton = styled.button`
  border: black;
  height: "25px";
  width: "25px";
`;

const Input = styled.input`
  height: 25px;
  width: 25px;
  text-align: center;
  align-self: center;
`;

export default BasketProduct;
