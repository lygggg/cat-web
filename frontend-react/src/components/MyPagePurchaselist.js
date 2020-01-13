import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import store from '../stores/PurchaseStore';
import PurchaseProduct from './PurchaseProduct';
import { getPurchase } from '../service/purchaseService';


import MenuButton from '../lib/Button';
import '../css/MyPagePurchaselist.css';
import {DescriptionName} from '../lib/ItemName';


const DateDiv = styled.div`
    background-color: #F9F9F9;
    margin: 7px;
    padding: 20px;
`;

const ItemDiv = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid #e0e0e0;
`;

const Div = styled.div`
    margin: auto;
    width: 1000px;
    height: auto;
    border: 1px solid #e0e0e0;
    padding: 20px;
    box-sizing: border-box;
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



function PurchaseList() {
    const [purchaseList, setPurchaseList] = useState([]);
    
    // if (store._finalBilling.length > 0) {
    //     final = store.priceTotal();
    // }

    const fetchPurchase = async () => {
        const items = await getPurchase();
        console.log(items.data.purchases[0]);
        setPurchaseList(items.data.purchases[0])
    }

    useEffect(() => {
        fetchPurchase();
    },[])

    return (
        <>
            <Div>
                <h2>주문목록/배송조회</h2>
                <div>
                    <MenuButton className="menu-btn">전체</MenuButton>
                    <MenuButton className="menu-btn">배송상품</MenuButton>
                    <MenuButton className="menu-btn">여행상품</MenuButton>
                    <MenuButton className="menu-btn">티켓상품</MenuButton>
                </div>
                <div>
                    {purchaseList.map(purchase =>
                        <div key={purchase.id}>
                            <DateDiv>{purchase.date}</DateDiv>
                            <ItemDiv>
                                <PurchaseProduct product={purchase} />
                            </ItemDiv>
                        </div>
                    )}
                </div>

            </Div>
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
        </>
    )
};
export default PurchaseList;

