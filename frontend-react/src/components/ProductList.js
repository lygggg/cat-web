import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import store from '../stores/ProductStore';
import Product from './Product';
import styled from 'styled-components';
import { Button } from '../lib/Button';
import ItemListDiv, { Div, H1 } from '../lib/Grid'




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

    }, [setProductList]
    );

    return (
        <Div>
            <H1>{categoryName}</H1>
            <div>
                <Button onClick={() => lowprice(productList)}>가격 낮은순</Button>
                <Button onClick={() => highprice(productList)}>가격 높은순</Button>
            </div>

            <ItemListDiv>
                {productList.map(product =>
                    <div key={product.id}>
                        <Product product={product} />

                    </div>
                )}
            </ItemListDiv>




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