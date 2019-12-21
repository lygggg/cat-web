import React from 'react';

import Purchase from '../stores/PurchaseStore';

import styled from 'styled-components';

const GridDiv = styled.div`
     display: grid;
    justify-content: center;
    width: 1500px;
    height: 1500px;
`; 


const Input = styled.input`
    width: 300px;
    height: 20px;
`;

const Div = styled.div`
    height: 50px;
    border: 1px solid #e0e0e0;
    width: 900px;
`;

const TitleTd = styled.span`
    background: #f4f4f4;
    width: 150px;
    height: 50px;
    font-size: 13px;
    display: grid;
    align-items: center;
    justify-content: center;
    
    
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
    Purchase.lastPayment();
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
                    <Div>
                    <TitleTd>이름</TitleTd>
                    </Div>
                    <Div>
                    <TitleTd>이메일</TitleTd>
                    </Div>
                    <Div>
                    <TitleTd>휴대폰 번호</TitleTd> 
                    </Div>
                </div>
                
             
                <div>
                <h2>받는 사람정보</h2>  
                    <Div>
                    <TitleTd>이름</TitleTd> 
                    </Div>
                    
                    <Div>
                    <TitleTd>배송주소</TitleTd> 
                    </Div>
                    <Div>
                    <TitleTd>연락처</TitleTd> 
                    </Div>
                    <Div>
                    <TitleTd>배송 요청사항</TitleTd> 
                    </Div>
                </div>
            
            
                <div>
                <h2>결제정보</h2>
                    <Div>
                    <TitleTd>총상품가격 </TitleTd>
                    </Div>
                    <Div>
                    <TitleTd>배송비 무료</TitleTd>
                    </Div>
                    <Div>
                    <TitleTd>총 결제금액 </TitleTd>
                    </Div>
                    <Div>
                        <PayMentDiv><TitleTd>결제방법</TitleTd> <span>
                                <input type='radio' />카드결제 (미구현)
                                <input type='radio' />무통장입금
                                <input type='radio' />계좌이체
                                </span></PayMentDiv>
                    
                    </Div>
                    </div>
                    
                
                <BuyButton onClick={() => handleBuy()}>구매하기</BuyButton>
            
            
        </GridDiv>
    );

}
export default BillingPage;