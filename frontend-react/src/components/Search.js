import React, { useState, useEffect } from "react";
import store from '../stores/ProductStore';
import ProductList from "./ProductList";
import Product from './Product';
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';


function Search() {
    const products = store.products;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };
    function handleSearch() {
        setIsVisible(true);
    }

    console.log(isVisible);
    return (

        <>
            <form style={{ display: 'inline-block', height: '40px', border: '2px solid #e0e0e0', background: 'white' }}>
            <input style={{ fontSize: '16px', width: '385px', height: '25px', padding: '5px', border: '0px', }} type='input' value={searchTerm} placeholder="   [투데이 특가] 매일 놀라운 가격"
                    onChange={handleChange}/>
                <Link to={`/search/${searchTerm}`}><button type='submit' style={{ width: '54px', height: '40px',marginLeft:'10px', border: '0px', background: '#1b5ac2', outline: 'none', color: 'white' }} onClick={handleSearch}>검색</button></Link>
            </form>
        </>

    )
}
export default Search;