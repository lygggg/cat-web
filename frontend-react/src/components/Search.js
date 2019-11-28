import React, { useState, useEffect } from "react";
import store from '../stores/ProductStore';
import ProductList from "./ProductList";
import Product from './Product';

function Search() {
    const products = store.products;
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const handleChange = event => {
        setSearchTerm(event.target.value);
    };

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
                <input type='text' value={searchTerm} placeholder="Search"
                    onChange={handleChange} />               
                     <ul>
                         
                        {searchResults.map(product =>(
                        <li key={product.id}>
                        <Product product={product}/>
                        </li>
                        ))}
                     </ul>
            </div>
        </>
    )
}
export default Search;