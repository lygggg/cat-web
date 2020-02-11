import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

import Product from './Product';
import { getProducts } from '../service/taskService';
import { getSearchProducts as searchProducts } from '../service/taskService'

import { Button } from '../lib/Button';
import ItemListDiv, { Div } from '../lib/Grid'

function SearchResult(props) {
  const [searchResults, setSearchResults] = useState([]);
  const { searchTerm } = useParams();

  // const fetchProducts = async () => {
  //   const result = await getProducts();
  //   setProducts(result.product);
  // };

  const lowprice = (result) => {
    const final = result.sort(function (a, b) { return a.price - b.price });
    return final;
  };

  const highprice = (result) => {

    const final = result.sort(function (a, b) { return b.price - a.price });
    return final;
  };

  async function handleSearch(searchTerm) {
    setSearchResults(await searchProducts(searchTerm));
  }

  useEffect(() => {
    handleSearch(props.searchText);
  },[props.searchText]);


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
}

export default SearchResult;
