import React, { useState ,useEffect } from 'react';

import { userAuth as getUserInfo  } from '../service/userService';

import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
    border-top: 1px solid black;
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




function BillingPage({ history }) {
    const [userInfo, setUserInfo] = useState([]);
    const [requestTerm, setRequestTerm] = useState('안전하게 배송 해주세요');
    const {
        name, phoneNumber, location, email,
    } = userInfo;

    function modifyRequestTerm() {
        var retVal = prompt("요청사항 변경 : ", requestTerm);
        setRequestTerm(retVal);
     }

    const UserInfo = async () => {
        const Info = await getUserInfo()
        setUserInfo(Info);
    }

useEffect(() => {
    UserInfo();
}, []);
    

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
                    <TextTd>{name}</TextTd>
                </tr>
                <tr>
                    <TitleTd>이메일</TitleTd>
                    <TextTd>{email}</TextTd>
                </tr>
                <tr>
                    <TitleTd>휴대폰 번호</TitleTd>
                    <TextTd>{phoneNumber}</TextTd>
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
                    <TextTd>{name}</TextTd>
                </tr>
                <tr>
                    <TitleTd>배송주소</TitleTd>
                    <TextTd>{location}</TextTd>
                </tr>
                <tr>
                    <TitleTd>연락처</TitleTd>
                    <TextTd>{phoneNumber}</TextTd>
                </tr>
                <tr>
                    <TitleTd>배송 요청사항</TitleTd>
                    <TextTd>{requestTerm} <button onClick={() => modifyRequestTerm()}>변경</button></TextTd>
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
                    <TextTd>{name}</TextTd>
                </tr>
                <tr>
                    <TitleTd>이메일</TitleTd>
                    <TextTd>{email}</TextTd>
                </tr>
                <tr>
                    <TitleTd>휴대폰 번호</TitleTd>
                    <TextTd>{phoneNumber}</TextTd>
                </tr>
                <tr>
                    <TitleTd>결제방법</TitleTd>
                <TextTd><span>
                            <input type='radio' name='Payment'/>
                            카드결제 (미구현)
                            <input type='radio' name='Payment'/>
                            무통장입금
                            <input type='radio' name='Payment'/>
                            계좌이체
                          </span></TextTd>
                </tr>
            </tbody>
        </Table>
                </div>
                <Link to='payment'><BuyButton>구매하기</BuyButton></Link>
    </GridDiv>
  );
}

export default BillingPage;
