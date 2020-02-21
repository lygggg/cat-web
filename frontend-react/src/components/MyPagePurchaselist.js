import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PurchaseProduct from './PurchaseProduct';
import { getPurchase } from '../service/purchaseService';

import { MainDiv } from '../lib/Grid';
import { MenuButton } from '../lib/Button';
import '../css/MyPagePurchaselist.css';
import { DescriptionName } from '../lib/ItemName';

function PurchaseList() {
  const [purchaseList, setPurchaseList] = useState([]);
  const fetchPurchase = async () => {
    const item = await getPurchase();
    setPurchaseList(item.data.purchases);
  };

  useEffect(() => {
    fetchPurchase();
  }, []);

  return (
    <MainDiv style={{height: '1500px'}}>
        <div style={{ width: '1230px', margin: 'auto', paddingTop: '40px' }}>
        <LeftDiv>
            <H2>마이쇼핑</H2>
            <Ul>
            <Link to='/purchase'><Li>주문 내역</Li></Link>
            <Link to='/usermodify'><Li>개인 정보 수정</Li></Link>
            <Li>Q&A</Li>
            </Ul>
        </LeftDiv>
        <div style={{ float: 'right' }}>
        <OrderDiv>
                <h2>주문목록/배송조회</h2>
                <div>
                    <MenuButton className="menu-btn">전체</MenuButton>
                    <MenuButton className="menu-btn">배송상품</MenuButton>
                    <MenuButton className="menu-btn">여행상품</MenuButton>
                    <MenuButton className="menu-btn">티켓상품</MenuButton>
                </div>
          <FrameDiv>
              {purchaseList.map(it => {
                  return (<div key= {it._id}>
                      <DateDiv>주문일 {it.date}</DateDiv>
                      { 
                      
                        it.products.map(i => {
                            return (
                                
                                <ItemDiv key={i._id}>
                                     <PurchaseProduct product={i} />
                                </ItemDiv>
                            )
                        })
                      }
                  </div>)
              })
              }
                    {/* {purchaseList.map(purchase =>
                        <div key={purchase.id}>
                            <DateDiv>{purchase.date}</DateDiv>
                            <ItemDiv>
                                <PurchaseProduct product={purchase} />
                            </ItemDiv>
                        </div>
                    )} */}
          </FrameDiv>
          
          
        </OrderDiv>
        <ImgDiv>
                <img style={{width:'800px'}} src='/public/image/order-status.png' />
            <FlexDiv>
              <DescriptionName></DescriptionName>
              <DescriptionName></DescriptionName>
              <DescriptionName></DescriptionName>
              <DescriptionName></DescriptionName>
              <DescriptionName></DescriptionName>
            </FlexDiv>
        </ImgDiv>
        <TextDiv>
                <h3>취소/반품/교환 신청 전 확인해주세요!</h3>
                <h4>취소</h4>
여행/레저/숙박 상품은 취소 시 수수료가 발생할 수 있으며, 취소수수료를 확인하여 2일 이내(주말,공휴일 제외)
 처리결과를 문자로 안내해드립니다. (당일 접수 기준, 마감시간 오후 4시)
문화 상품은 사용 전날 24시까지 취소 신청 시 취소수수료가 발생되지않습니다.
                <h4>반품</h4>
상품 수령 후 7일 이내 신청하여 주세요.
상품이 출고된 이후에는 배송 완료 후, 반품 상품을 회수합니다.
설치상품/주문제작/해외배송/신선냉동 상품 등은 고객센터에서만 반품 신청이 가능합니다. 
                <h4>교환</h4>
상품의 교환 신청은 고객센터로 문의하여 주세요.
        </TextDiv>
        </div>
        </div>
    </MainDiv>
  );
}

const DateDiv = styled.div`
    font-size: 17px;
    background-color: #F9F9F9;
    margin: 7px;
    padding: 20px;
`;

const FrameDiv = styled.div`
display: grid;
grid-gap: 50px
`;

const ItemDiv = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #e0e0e0;
`;

const OrderDiv = styled.div`
    width: 1000px;
    height: auto;
    border: 1px solid #e0e0e0;
    padding: 20px;
    box-sizing: border-box;
`;

const LeftDiv = styled.div`
    float: left;
    width: 200px;
    font-family: noto sans;
    font-weight: 400;
    letter-spacing: 0;
`;

const ImgDiv = styled.div`
    width: 1000px;
    margin: 24px auto 0 auto;
    box-sizing: border-box;
    padding: 30px;
    border: 1px solid rgb(224, 224, 224);
    display: grid;
    justify-content: center;
    align-items: center;
`;

const TextDiv = styled.div`
    display: grid;
    width: 1000px;
    margin: 24px auto 0 auto;
    box-sizing: border-box;
    padding: 30px;
    border: 1px solid rgb(224, 224, 224);
    display: grid;
    
    align-items: center;
    background: #f3f3f3;

`;
const FlexDiv = styled.div`
    display: flex;
    text-align: -webkit-center;
`;

const H2 = styled.h2`
    padding: 0 0 30px 2px;
    font-weight: 700;
    font-size: 28px;
    line-height: 41px;
    color: #4a4a4a;
    font-weight: 400;
`;

const Ul = styled.ul`
    display: block;
    border: 1px solid #dcdbde;
    padding: 0;
`;
const Li = styled.li`
    border-bottom: 1px solid #dcdbde;
    overflow: hidden;
    padding: 16px 0 16px 19px;
    background: #fff url(https://res.kurly.com/pc/ico/1803/ico_arrow_12x22.png) no-repeat 174px 50%;
    background-size: 6px 10px;
    font-size: 12px;
    color: #666;
    line-height: 18px;
`;


export default PurchaseList;
