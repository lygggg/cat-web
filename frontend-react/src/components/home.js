import React from 'react';
import { Link } from 'react-router-dom';

import ProductList from './ProductList';
import Category from './Category';

import productStore from '../stores/ProductStore';



function Home() {
  const categories = productStore.categories;

  return (
    <>
      <header>
        <ul>
          <li><a className="header_text" href="#">★즐겨찾기★ 강아지왕국 바로가기</a></li>
          <ul className="header_user">
            <li><a className="header_text" >로그인</a></li>
            <li><a className="header_text" href="#">회원가입</a></li>
            <li><a className="header_text" href="#">장바구니</a></li>
            <li><a className="header_text" href="#">마이페이지</a></li>
            <li><a className="header_text" href="#">고객센터</a></li>
          </ul> 
        </ul>
        <input type='text' id='input_text' />
        <button type='submit' id='sch_smit'>검색</button>
        <nav>
          <ul>
            {categories.map((category, index) =>
              <li key={index}>
                <Category categoryName={category} categoryId={index}/>
              </li>
            )}
          </ul>
        </nav>
        <Link to="/products/new">
          <i className="material-icons ic-create">상품추가</i>
        </Link>
      </header>
      <ProductList />
    </>
  );
}

export default Home;