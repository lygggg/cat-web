import React from "react";
import { Link } from 'react-router-dom';

import Category from './Category';
import productStore from '../stores/ProductStore';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  display: inline-block;
  margin-right: 20px;
  margin-left: 20px;
  text-decoration: none;
`;

const Nav = styled.nav`
  width: 1500px;
  text-align: center;
`;

function NavMenu() {
  const categories = productStore.categories;
  return (
    <Nav>
      <ul>
        {categories.map((category, index) =>
          <Li key={index}>
            <Category categoryName={category} categoryId={index} />
          </Li>
        )}
        <Link to="/products/new">
          <Li className="material-icons ic-create">상품추가</Li>
        </Link>
      </ul>
    </Nav>
  );
};

export default NavMenu;