import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import store from '../stores/ProductStore';
import Product from './Product';
import { filter } from 'minimatch';
import styled from 'styled-components';
import Grid from "antd/lib/card/Grid";

const H1 = styled.h1`
    width: 100%;
    text-align: center;
`;

const Div = styled.div`
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
    border: 1px solid #333;
`;

const Button = styled.button`
    display: inline-block;
    color: #333;
    background-color: white;
    border-radius: 3px;
    border: 1px solid #333;
    margin-right: 10px;
    margin-left: 10px;
    padding: 10px;
    padding-left: 20px;
    padding-right: 20px;
`;

let newCategoryId = 0;

function ProductList() {
    const [productList, setProductList] = useState([]);
    const [priceOrder, setPriceOrder] = useState('');
    const { categoryId } = useParams();
    const categoryName = store.categories[categoryId];
    const products = store.products;

    if (newCategoryId != categoryId) {
        newCategoryId = categoryId;

        setProductList(products.filter(product => product.category === categoryName));
    }

    const lowprice = (result) => {

        setPriceOrder('낮은가격순');
        const final = result.sort(function (a, b) {
            return a.price - b.price

        })

        return final;

    }

    const highprice = (result) => {

        setPriceOrder('높은가격순');
        const final = result.sort(function (a, b) {
            return b.price - a.price

        })
        return final;

    }

    useEffect(() => {
        const result = products.filter(product => product.category === categoryName);
        setProductList(result);

    }, [setPriceOrder]
    );

    return (
        <Div>
            <H1>{categoryName}</H1>
            <div>
                <Button onClick={() => lowprice(productList)}>가격 낮은순</Button>
                <Button onClick={() => highprice(productList)}>가격 높은순</Button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '300px 300px 300px', gridTemplateRows: '300px 300px 300px' }}>
                {productList.map(product =>
                    <div key={product.id}>
                        <Product product={product} />

                    </div>
                )}
            </div>
            



        </Div>
    );
}
export default ProductList;

export const CATEGORIES = {
    0: '사료',
    1: '간식',
    2: '캔',
    3: '모래'
};