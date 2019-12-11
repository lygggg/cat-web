import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Search from './Search';
import NavMenu from './NavMenu';

const Ul = styled.ul`
  width: 1450px;
`

const Li = styled.li`

    list-style: none;
    margin: 10px;
    padding: 0px;
    text-decoration: none;
    float: right;
    background-color: white;
    color: #333;
`;

const Div = styled.div`
    text-align: center;
    width: 1500px;
    height: 100px;
    border: 1px solid black;
    /* margin-right: 10px; */
`;

function Header() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));

  function handleLogout() {
    localStorage.setItem('isLogin', false);
    setIsLogin(localStorage.getItem('isLogin'));
  }

  return (
    <>
      {isLogin === 'true' ? (<button onClick={handleLogout}>로그아웃</button>)
        : (<Link to='/login'><button>로그인</button></Link>)}

      <Ul className='header_user'>
        <Link to='/signup'><Li>회원가입</Li></Link>
        <Link to='/purchase'><Li>마이페이지</Li></Link>
        <Link to='/basket'><Li>장바구니</Li></Link>
        <Link to='/'><Li>고객센터</Li></Link> 
      </Ul>

      <Div>
        <Link to='/'><img style={{marginLeft: '230px', maxWidth: '200px', maxHeight: '150px', width: 'auto', height: 'auto'}} src='/public/image/catbaner.jpg' /></Link>
        <Search />
      </Div>
      <NavMenu />
    </>
  );
}

export default Header;
