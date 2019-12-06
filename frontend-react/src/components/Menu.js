import React from "react";
import { Link } from 'react-router-dom';
import ProductList from './ProductList';
import Category from './Category';
function menu() {
    return (
        <header>
          <ul>
          <li><a className="header_text" href="#">★즐겨찾기★ 강아지왕국 바로가기</a></li>
          <ul className="header_user">
            
            <li><Link to="/login"><i>로그인</i></Link></li>
            <li>로그아웃</li>
            <li><Link to="/signup">회원가입</Link></li>
            <li><Link to='/purchase'>구매목록</Link></li>
            <li><Link to="/basket"><i>장바구니</i></Link></li>
            
            <li><a className="header_text" href="#">마이페이지</a></li>
            <li><a className="header_text" href="#">고객센터</a></li>
          </ul> 
        </ul>
        <nav>
          <ul>
            {categories.map((category, index) =>
              <li key={index}>
                <Category categoryName={category} categoryId={index}/>
              </li>
            )}
          </ul>
        </nav>
        </header>
    );
};
export default menu;