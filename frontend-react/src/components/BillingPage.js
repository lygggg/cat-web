import React from 'react';

import styled from 'styled-components';

const GridDiv = styled.div`
    display: grid;
    justify-content: center;
    width: 1880px;
    height: 1500px;
`;

const Table = styled.table`
    height: 50px;
    border: 1px solid #e0e0e0;
    width: 900px;
`;

const TitleTd = styled.td`
    background: #f4f4f4;
    width: 150px;
    height: 40px;
    font-size: 13px;
    align-items: center;
    justify-content: center;
    text-align:center;
    border: 4px solid #f4f4f4;
    font-weight: bold;
    
    
`;

const TextTd = styled.td`
    border-bottom: 1px solid #e4e4e4;
    padding: 10px 16px;
    font-size: 12px;
    color: #333;
    font-family: "돋움",Dotum,sans-serif;
`;

const PayMentDiv = styled.div`
    display: flex;
    align-items: center;
`;

const BuyButton = styled.button`
    height: 60px;
    width: 260px;
    background: #0073e9;
    color: #fff;
    border: 2px solid #0073e9;
    border-radius: 4px;
    font-weight: 500;
    font-size: 22px;
    justify-self: center;

`;
function handleBuy() {
}

function BillingPage() {

  return (
    <GridDiv>
            <div style={{borderBottom: '1px solid black'}}>
            <img  src='/public/image/catbaner.jpg' />
            </div>
        <h1 style={{borderBottom: '3px solid black'}}>주문/결제</h1>
        <div>
            <h2>구매자정보</h2>
                <Table>
            <tbody>
                <tr>
                    <TitleTd>이름</TitleTd>
                    <TextTd>이영규</TextTd>
                </tr>
                <tr>
                    <TitleTd>이메일</TitleTd>
                    <TextTd>baayoo93@naver.com</TextTd>
                </tr>
                <tr>
                    <TitleTd>휴대폰 번호</TitleTd>
                    <TextTd>010-2388-7218</TextTd>
                </tr>
            </tbody>
        </Table>
        </div>
                <div>
                <h2>받는 사람정보</h2>  
                <Table>
            <tbody>
                <tr>
                    <TitleTd>이름</TitleTd>
                    <TextTd>이영규</TextTd>
                </tr>
                <tr>
                    <TitleTd>배송주소</TitleTd>
                    <TextTd>이태원</TextTd>
                </tr>
                <tr>
                    <TitleTd>연락처</TitleTd>
                    <TextTd>010-2388-7218</TextTd>
                </tr>
                <tr>
                    <TitleTd>배송 요청사항</TitleTd>
                    <TextTd>문 앞</TextTd>
                </tr>
            </tbody>
        </Table>
                </div>
                <div>
                <h2>결제정보</h2>
                <Table>
            <tbody>
                <tr>
                    <TitleTd>이름</TitleTd>
                    <TextTd>이영규</TextTd>
                </tr>
                <tr>
                    <TitleTd>이메일</TitleTd>
                    <TextTd>baayoo93@naver.com</TextTd>
                </tr>
                <tr>
                    <TitleTd>휴대폰 번호</TitleTd>
                    <TextTd>010-2388-7218</TextTd>
                </tr>
                <tr>
                    <TitleTd>결제방법</TitleTd>
                <TextTd><span>
                            <input type='radio' />
                            카드결제 (미구현)
                            <input type='radio' />
                            무통장입금
                            <input type='radio' />
                            계좌이체
                          </span></TextTd>
                </tr>
            </tbody>
        </Table>
                </div>
                <BuyButton onClick={() => handleBuy()}>구매하기</BuyButton>
    </GridDiv>
  );
}

export default BillingPage;
