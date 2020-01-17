import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getProductDetail as getProduct } from '../service/taskService'

import { createPurchase as buyItem } from '../service/purchaseService'

import styled from 'styled-components';

import {
  MainName, PriceName, BoldName, DescriptionName,
} from '../lib/ItemName';
import { Button } from '../lib/Button';
import { putCart } from '../service/basketService';


const ItemDetali = styled.div`
    display:grid;
    grid-template-columns: 500px 600px;
    grid-template-rows: 600px;
    margin: auto;
    width: 1000px;
    height: 0%;
    border: 1px solid #e0e0e0;
    padding: 20px;
`;

const ItemDivide = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const PutDiv = styled.div`
    display: flex;
    margin-right: 10px;
`;

const handleBuyItem = async (product, count) => {
  await buyItem({ ...product, count });
};

const putProduct = async (product, count) => {
  await putCart({ ...product, count });
};


function ProductDetail() {
  const [product, setProduct] = useState([]);
  const [count, setcount] = useState(1);
  const { productId } = useParams();
  const {
    imageurl, account, phoneNumber, title, description, price,
  } = product;


  const getOneProduct = async (id) => {
    const oneProduct = await getProduct(id);
    setProduct(oneProduct.products);
  };

  useEffect(() => {
    getOneProduct(productId);
  }, []);

  function handlePlus() {
    setcount(count + 1);
  }

  function handleMinus() {
    if (count > 1) {
      setcount(count - 1);
    }
  }

  return (
        <ItemDetali>
            <div>
                <img
                    src={imageurl}
                    alt=""
                    width="470px"
                    height="552px"
                />
            </div>
            <ItemDivide>
                <div>
                    <MainName>{title}</MainName>
                    <BoldName>{description}</BoldName>
                </div>
                <div>
                    <PriceName style={{ fontSize: '24px', lineHeight: '40px' }}>{price}원
            </PriceName>
                    <DescriptionName style={{}}>로그인후, 회원할인가와 적립혜택이 제공됩니다.</DescriptionName>
                    <h4>무료배송</h4>
                </div>
                <PutDiv>
                    <span style={{ margin: '6px' }}>
                        <button style={{ height: '36px', width: '40px' }} onClick={() => handlePlus()}>+</button>
                        <input style={{ textAlign: 'center', height: '30px' }} type='text'
                            className='count' value={count} size='3' readOnly />
                        <button style={{ height: '36px', width: '40px' }} onClick={() => handleMinus()}>-</button>
                    </span>
                    <Link to='/billingpage'><Button style={{ margin: '6px' }} onClick={() => handleBuyItem(product, count)}>상품 구매</Button></Link>
                    <Button style={{ background: '#f0f0f0', margin: '6px' }} onClick={() => putProduct(product, count)}>장바구니 추가</Button>
                </PutDiv>
                <div>
                    <DescriptionName>계좌번호: {account}</DescriptionName>
                    <DescriptionName>핸드폰 번호: {phoneNumber}</DescriptionName>
                </div>
            </ItemDivide>
        </ItemDetali>
  );
}

export default ProductDetail;
