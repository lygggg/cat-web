import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

function LeftMenu() {

    return (

        <>
        <LeftDiv>
          <H2>마이쇼핑</H2>
          <Ul>
            <Link to="/purchase">
              <Li>주문 내역</Li>
            </Link>
            <Link to="/review">
              <Li>상품 후기</Li>
            </Link>
            <Link to="/usermodify">
              <Li>개인 정보 수정</Li>
            </Link>
            <Li>Q&A</Li>
          </Ul>
        </LeftDiv>
        </>

    )
}

const Ul = styled.ul`
  display: block;
  border: 1px solid #dcdbde;
  padding: 0;
`;

const H2 = styled.h2`
  padding: 0 0 30px 2px;
  font-weight: 700;
  font-size: 28px;
  line-height: 41px;
  color: #4a4a4a;
  font-weight: 400;
`;

const Li = styled.li`
  border-bottom: 1px solid #dcdbde;
  overflow: hidden;
  padding: 16px 0 16px 19px;
  background: #fff url(https://res.kurly.com/pc/ico/1803/ico_arrow_12x22.png)
    no-repeat 174px 50%;
  background-size: 6px 10px;
  font-size: 12px;
  color: #666;
  line-height: 18px;
`;

const LeftDiv = styled.div`
  float: left;
  width: 200px;
  font-family: noto sans;
  font-weight: 400;
  letter-spacing: 0;
`;

export default LeftMenu;
