import React from "react";
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Category from './Category';
import productStore from '../stores/ProductStore';
import styled from 'styled-components';



function NavMenu() {

  const categories = productStore.categories;



    return (
        
        <nav>
          <ul>
            {categories.map((category, index) =>
              <li key={index}>
                <Category categoryName={category} categoryId={index}/>
              </li>
            )}
          </ul>
        </nav>
        
    );
};
export default NavMenu;