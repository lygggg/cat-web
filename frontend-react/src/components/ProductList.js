import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import store from '../stores/ProductStore';
import Product from './Product';
import { filter } from 'minimatch';

function ProductList() {
    const [ListResult, setListResult] = useState([]);
    const [button, setButton] = useState('');
    const { categoryId } = useParams();
    const categoryName = store.categories[categoryId];
    const products = store.products;


    const lowprice = async (result) => {

        setButton('낮은가격순');
        const final = result.sort(function (a, b) {
            return a.price - b.price

        })
        return final;

    }

    const highprice = async (result) => {

        setButton('높은가격순');
        const final = result.sort(function (a, b) {
            return b.price - a.price

        })
        return final;

    }

    useEffect(() => {
        const result = products.filter(product => product.category === categoryName);
        setListResult(result);


        if (button == '낮은가격순') {
            setListResult(lowprice);
        }
        else if (button == '높은가격순') {
            setListResult(lowprice);
        }

    }, [setButton]
    );

    return (
        <>

            <h1>{categoryName}</h1>
            <button onClick={() => lowprice(ListResult)} onChange={setButton}>가격 낮은순</button>
            <button onClick={() => highprice(ListResult)} onChange={setButton}>가격 높은순</button>


            {ListResult.map(product =>
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