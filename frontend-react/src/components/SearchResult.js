import React, { useState, useEffect } from "react";
import store from '../stores/ProductStore';
import { useParams } from 'react-router-dom';
import ProductList from "./ProductList";
import Product from './Product';

function SearchResult() {
    const products = store.products;
    // const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
   
    const { searchTerm } = useParams();
    console.log(searchTerm);
    useEffect( () =>{   
          const result = products.filter(product =>
            product.title.indexOf(searchTerm) > -1  
         );
             setSearchResults(result);
    }
    ,[searchTerm]
    );

    
    return (
        <>
            <div>
                    <ul>
                        {searchResults.map(product => (
                            <li key={product.id}>
                                <Product product={product} />
                            </li>
                        ))}
                    </ul> 
            </div>
        </>
    );
};
export default SearchResult;
