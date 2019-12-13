import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import store from '../stores/PurchaseStore';
import PurchaseProduct from './PurchaseProduct';
import MenuButton from '../lib/Button';
import '../css/MyPagePurchaselist.css';
import {DescriptionName} from '../lib/ItemName';
import { symbol } from 'prop-types';

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
const FlexDiv = styled.div`
    display: flex;
    text-align: -webkit-center;
`;

function PurchaseList() {
    const purchaseList = store.finalBilling;
    // if (store._finalBilling.length > 0) {
    //     final = store.priceTotal();
    // }

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
                <img src='/public/image/order-status.png' />
                <FlexDiv>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
                <DescriptionName></DescriptionName>
                </FlexDiv>
            </ImgDiv>
        </>
    )
};
export default PurchaseList;

