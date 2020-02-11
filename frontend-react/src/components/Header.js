import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Search from './Search';
import NavMenu from './NavMenu';

import { userLogout } from '../service/userService';

const Ul = styled.ul`
    width: 1850px;
`;

const Li = styled.li`
    list-style: none;
    margin: 10px;
    padding: 0px;
    text-decoration: none;
    float: right;
    background-color: white;
    color: #333;
    font-size: 12px;
`;

const Div = styled.div`
    width: 1850px;
    height: 150px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    align-items: center;
`;

function Header(props) {
  const [userName, setUserName] =  useState('')

  const handleLogout = async () => {
    userLogout();
    localStorage.removeItem('isLogin');
    window.location.href = '/';
  }
  const searchTermRoute = (text) => {
    props.searchCallback(text)
  }

  return (
    <>
      <Ul className='header_user'>
        <Link to='/purchase'><Li>마이페이지</Li></Link>
        <Link to='/basket'><Li>장바구니</Li></Link>
        <Link to='/'><Li>고객센터</Li></Link>
        {localStorage.getItem('isLogin') ? <><Link to='/'><Li onClick={handleLogout}>로그아웃</Li></Link></>
        : (<><Link to='/signup'><Li>회원가입</Li></Link><Link to='/user/login'><Li>로그인</Li></Link></>)}
        <Li>{userName}</Li>
      </Ul>
      <Div>
        <Link to='/'><span><img style={{ maxWidth: '150px', width: 'auto', height: 'auto', margin: '10px' }} src='/public/image/catbaner.jpg' /></span></Link>
        <Search handleSearch={searchTermRoute} />
      </Div>
      <NavMenu />
    </>
  );
}

export default Header;
