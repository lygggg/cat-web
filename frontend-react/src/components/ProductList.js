import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import store from '../stores/ProductStore';
import Product from './Product';
import { filter } from 'minimatch';

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
        <>

            <h1>{categoryName}</h1>
            <button onClick={() => lowprice(productList)}>가격 낮은순</button>
            <button onClick={() => highprice(productList)}>가격 높은순</button>


            {productList.map(product =>
                <li key={product.id}>
                    <Product product={product} />

                </li>
            )}



        </>
    );
}
export default ProductList;

export const CATEGORIES = {
    0: '사료',
    1: '간식',
    2: '캔',
    3: '모래'
};