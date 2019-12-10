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

    // useEffect( () =>{   
    //       const result = products.filter(product =>
    //         product.title.indexOf(searchTerm) > -1  
    //      );
    //          setSearchResults(result);
    // }
    // ,[searchTerm]
    // );

    
    function handleSearch() {
        setIsVisible(true);
    }
    
    console.log(isVisible);
    return (
        
        <>
         <span style={{display: 'inline-block', height: '40px', width: '399px', border: '1px solid #1b5ac2', background: 'white'}}>
            <input style={{fontSize: '16px', width: '325px',height: '20px', padding: '10px', border: '0px',}} type='text' value={searchTerm} placeholder="Search"
                onChange={handleChange} />
            <Link to={`/search/${searchTerm}`}><button style={{width: '54px', height: '100%', border: '0px', background: '#1b5ac2', outline: 'none', color: 'white'}} onClick={handleSearch}>검색</button></Link>        
         </span>
        </>
        
    )
}
export default Search;