import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { getReviewProduct as getProduct } from "../service/reviewService";

import LeftMenu from "./LeftMenu";

import { MainDiv } from "../lib/Grid";
import { Button } from "../lib/Button";
import "../css/MyPagePurchaselist.css";
import { useParams } from "react-router-dom";

function WriteReviewPage() {
  const { productId } = useParams();
  const [ReviewProduct, setReviewProduct] = useState([]);
  const [starcount, setStarCount] = useState(0);

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
        <LeftMenu />
        <div style={{ float: "right" }}>
          <h1>구매후기</h1>
          <OrderDiv>
            <ReviewDiv>
              <div>
                <TableDiv
                  style={{
                    fontSize: "14px",
                    color: "#111",
                    fontWeight: "bold",
                  }}
                >
                  구매후기 쓰기
                </TableDiv>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={ReviewProduct.imageurl}
                  alt=""
                  width="20%"
                  height="180px"
                />
                <div style={{ display: "grid" }}>
                  <div
                    style={{
                      fontSize: "14px",
                      color: "#111",
                      fontWeight: "bold",
                    }}
                  >
                    {ReviewProduct.title}
                  </div>
                  <div>{ReviewProduct.description}</div>
                  <div>{ReviewProduct.count}개</div>
                </div>
              </div>
            </ReviewDiv>
            <TableDiv>
              <div
                style={{
                  width: "80px",
                  fontSize: "14px",
                  color: "#111",
                  fontWeight: "bold",
                }}
              >
                별점
              </div>
              {starcount === 0 ? (
                <div>
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="1"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="2"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="3"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="4"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="5"
                    onClick={() => setStarCount(5)}
                  />
                </div>
              ) : (
                <></>
              )}
              {starcount === 1 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="1"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="2"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="3"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="4"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="5"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starcount === 2 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="1"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="2"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="3"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="4"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="5"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starcount === 3 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="1"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="2"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="3"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="4"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="5"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starcount === 4 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="1"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="2"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="3"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="4"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    value="5"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starcount === 5 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="1"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="2"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="3"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="4"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    value="5"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {/* {starcount === 1 ? "나쁨" : ""}
              {starcount === 2 ? "별로" : ""}
              {starcount === 3 ? "보통" : ""}
              {starcount === 4 ? "좋음" : ""}
              {starcount === 5 ? "최고" : ""} */}
            </TableDiv>
            <TableDiv>
              <div
                style={{
                  fontSize: "14px",
                  color: "#111",
                  fontWeight: "bold",
                  width: "80px",
                }}
              >
                구매하기
              </div>
              <textarea style={{ width: "100%", height: "146px" }}></textarea>
            </TableDiv>
            <TableDiv>
              <div
                style={{
                  fontSize: "14px",
                  color: "#111",
                  fontWeight: "bold",
                  width: "80px",
                }}
              >
                사진첨부
              </div>
              <div>
                <Button>사진 첨부하기</Button>
              </div>
            </TableDiv>
          </OrderDiv>
          <div style={{ textAlign: 'center', marginTop: '30px' }}>
            <RegisterButton>등록하기</RegisterButton>
          </div>
        </div>
      </div>
    </MainDiv>
  );
}

const RegisterButton = styled.button`
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

const TitleDiv = styled.div`
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 30px 20px;
`;

const OrderDiv = styled.div`
  align-items: center;
  width: 1000px;
  height: auto;
  border: 1px solid #e0e0e0;
  padding: 20px;
  box-sizing: border-box;
`;

const ReviewDiv = styled.div`
align-items: center;
  border-bottom: 1px solid #111
  border-top: 1px solid #111
`;

const TableDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #ddd;
  padding: 30px 20px;
`;

export default WriteReviewPage;
