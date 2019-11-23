import React from 'react';
import { useParams } from 'react-router-dom';
import store from '../stores/ProductStore';
import Product from './Product';
import { filter } from 'minimatch';

export const CATEGORIES = {
    0: '사료',
    1: '간식',
    2: '캔',
    3: '모래'
};


function ProductList( props ) {
    const { categoryId } = useParams();
    const categoryName = store.categories[categoryId];
    
   
     const products = store.products;
     console.log(props.name)
  
     const result = products.filter(product => product.category ===  categoryName  );
      console.log(result);
    return (
        <>
        <h1>{categoryName}</h1>
        
            {result.map(product =>
                <li key={product.id}>
                    <Product product={product}/>

                </li>
                )}
               
  
        
        </>
);
            }
export default ProductList;