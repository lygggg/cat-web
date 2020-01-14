import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Product from './Product';
import { getProducts } from '../service/taskService';

import { Button } from '../lib/Button';
import ItemListDiv, { Div } from '../lib/Grid'

function SearchResult() {
    const [searchResults, setSearchResults] = useState([]);
    const [products, setProducts] = useState([]);
    const { searchTerm } = useParams();
    
    const fetchProducts = async () => {
        const products = await getProducts();
        setProducts(products.product);
        console.log(products.product);
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
        fetchProducts();
        
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
