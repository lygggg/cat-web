import React from 'react'

import styled from 'styled-components';

const Footer = styled.footer`
    margin-top: 100px;
    width: 1890px;
    
`;

const TextDiv = styled.div`
    display: flex;
    width: 1890px;
    height: 90px;
    background: #333;
    text-align: center;
    color: #888;
    justify-content: center;
    font-size: 12px;
    padding: 15px 0px 3px 0;

`;

const MenuDiv = styled.div`
    text-align: center;
    margin: 15px;
    border-top: 2px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
    height: 60px;
    padding: 20px;
`;

const MidDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const A = styled.a`
    margin: 40px;
    font-size: 14px;
    color: #4C4C4C;
`;

const MidP = styled.p`
    margin:50px;
`;

function Bottom() {
    return(
        <>
          <Footer>
            <MenuDiv>
                <A>인재채용</A>|
                <A>입점 / 제휴문의</A>|
                <A>공지사항</A>|
                <A>고객의 소리</A>|
                <A>이용약관</A>
            </MenuDiv>
            <MidDiv>
                <div>
                <MidP>
                    대표이사: 이영규
                </MidP>
                </div>
                <div>
                <MidP>
                    010-2388-7219
                </MidP>
                </div>
                <div>
                <MidP>
                    LeeTeaWon
                </MidP>
                </div>
            </MidDiv>
            <TextDiv>
                <p style= {{wordBreak: "break-all", width: '600px'}}>
            판매자가 등록한 마켓플레이스(오픈마켓) 상품에 대한 광고, 상품주문, 배송 및 환불의 의무와 책임은 각 판매자가 부담하고,
이에 대하여 이태원마켓은 통신판매중개자로서 통신판매의 당사자가 아니므로 일체 책임을 지지 않습니다.
이태원마켓은 소비자 보호와 안전거래를 위해 신뢰관리센터(lyg@lyg.com)를 운영하고 있습니다.
                </p>
            </TextDiv>
          </Footer>
        </>
  );
}
export default Bottom;
