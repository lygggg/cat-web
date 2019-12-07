import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Category from './Category';
import productStore from '../stores/ProductStore';
import Search from './Search';
import Slider from './Slider';

function Home() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));

  const categories = productStore.categories;

  function handleLogout() {
    localStorage.setItem('isLogin', false);
    setIsLogin(localStorage.getItem('isLogin'));
  }

  return (
    <>
      {isLogin === 'true' ? (<button onClick={handleLogout}>로그아웃</button>)
        : (<Link to='/login'><button>로그인</button></Link>)}
      <ul>
        <li><a className='header_text' href='#'>★즐겨찾기★ 강아지왕국 바로가기</a></li>
        <ul className='header_user'>
          <li><Link to='/signup'>회원가입</Link></li>
          <li><Link to='/purchase'>마이페이지</Link></li>
          <li><Link to='/basket'><i>장바구니</i></Link></li>
          <li><a className='header_text' href='#'>고객센터</a></li>
        </ul>
      </ul>
      <nav>
        <ul>
          {categories.map((category, index) =>
            <li key={index}>
              <Category categoryName={category} categoryId={index} />
            </li>
          )}
        </ul>
      </nav>
      
      <Slider/>
      <Link to="/products/new">
        <i className="material-icons ic-create">상품추가</i>
      </Link>
      <Search />
      
    </>
  );
}

export default Home;