import React from "react";
import { Link } from 'react-router-dom';

import Category from './Category';
import productStore from '../stores/ProductStore';
import styled from 'styled-components';

const Li = styled.li`
  list-style-type: none;
  display: inline-block;
  padding: 0px 50px 0 48px;
  height: 30px;
  font-size: 16px;
  color: #333;
  overflow: hidden;
  text-decoration: none;
`;

const Nav = styled.nav`
  width: 1500px;
  text-align: center;
`;

const ImageSpan = styled.span`
  background-image: url(https://res.kurly.com/pc/service/common/1908/ico_gnb_all_off.png);
  width: 100%;
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
};

export default NavMenu;