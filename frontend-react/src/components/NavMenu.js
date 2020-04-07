import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Category from './Category';
import productStore from '../stores/ProductStore';

const Li = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 0px 50px 0 48px;
  font-weight: bold;
  height: 40px;
  font-size: 14px;
  color: #333;
  overflow: hidden;
  text-decoration: none;
  line-height: 50px;
`;

const Nav = styled.div`
  width: 100%;
  min-width: 1500px;
  text-align: center;
  border-top: 1px solid #f1f3f6;
`;

function NavMenu() {
  const categories = productStore.categories;
  return (
    <Nav>
      <ul>
        <Li>
          <a>
            메뉴
          </a>
        </Li>
        {categories.map((category, index) =>
          <Li key={index}>
            <Category categoryName={category} categoryId={index} />
          </Li>
        )}
        <Link to="/products/new">
          <Li>상품추가</Li>
        </Link>
      </ul>
    </Nav>
  );
}

export default NavMenu;
