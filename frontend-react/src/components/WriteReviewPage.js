import React, { useState, useEffect } from "react";
import FileUpload from "./fileupload/FileUpload";
import styled from "styled-components";

import { getReviewProduct as getProduct } from "../service/reviewService";
import { createReview as postReview } from "../service/reviewService";

import LeftMenu from "./LeftMenu";

import { MainDiv } from "../lib/Grid";
import "../css/MyPagePurchaselist.css";
import { useParams } from "react-router-dom";

function WriteReviewPage() {
  const { productId } = useParams();
  const [ReviewProduct, setReviewProduct] = useState([]);
  const [starCount, setStarCount] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [review, setReview] = useState([]);

  const fetchReview = async () => {
    const reviewProduct = await getProduct(productId);
    setReviewProduct(reviewProduct.reviewProduct.products[0]);
  };

  const getReviewData = async (e) => {
    setReview(e);
  };

  const sendReview = async () => {
    await postReview(review);
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
              {starCount === 0 ? (
                <div>
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(5)}
                  />
                </div>
              ) : (
                <></>
              )}
              {starCount === 1 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starCount === 2 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starCount === 3 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starCount === 4 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/graystar.png"}
                    width="10%"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {starCount === 5 ? (
                <span>
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(1)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(2)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(3)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(4)}
                  />
                  <img
                    src={"/public/image/star.png"}
                    width="10%"
                    onClick={() => setStarCount(5)}
                  />
                </span>
              ) : (
                <></>
              )}
              {/* {starCount === 1 ? "나쁨" : ""}
              {starCount === 2 ? "별로" : ""}
              {starCount === 3 ? "보통" : ""}
              {starCount === 4 ? "좋음" : ""}
              {starCount === 5 ? "최고" : ""} */}
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
                구매후기
              </div>
              <textarea
                value={reviewText}
                maxLength="200"
                onChange={(v) => setReviewText(v.target.value)}
                style={{ width: "100%", height: "146px" }}
              ></textarea>
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
                <FileUpload getReview={getReviewData} productId={ReviewProduct.id} starCount={starCount} reviewText={reviewText}  />
              </div>
            </TableDiv>
          </OrderDiv>
          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <RegisterButton
              onClick={() => {
                sendReview();
              }}
            >
              등록하기
            </RegisterButton>
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
