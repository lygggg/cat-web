import React, { useState, useEffect } from "react";
import store from '../stores/ProductStore';
import { useParams } from 'react-router-dom';
import ProductList from "./ProductList";
import Product from './Product';
import { Button } from '../lib/Button';
import ItemListDiv, { Div, H1 } from '../lib/Grid'

function SearchResult() {
    const products = store.products;
    // const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [priceOrder, setPriceOrder] = useState('');

    const { searchTerm } = useParams();
    console.log(searchTerm);
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
        const result = products.filter(product =>
            product.title.indexOf(searchTerm) > -1
        );
        setSearchResults(result);
    }
        , [searchTerm]
    );


    return (
        <Div>
            <div>
                <Button onClick={() => lowprice(searchResults)}>가격 낮은순</Button>
                <Button onClick={() => highprice(searchResults)}>가격 높은순</Button>
                </div>
                <ItemListDiv>
                    {searchResults.map(product => (
                        <div key={product.id}>
                            <Product product={product} />
                        </div>
                    ))}
                </ItemListDiv>
            
            </Div>
    );
};
export default SearchResult;
