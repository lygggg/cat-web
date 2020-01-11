import React, { useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';

import styled from 'styled-components';

import Search from './Search';
import NavMenu from './NavMenu';

import { userAuth, userLogout } from '../service/userService';

const Ul = styled.ul`
  width: 1400px;
`

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
    width: 1500px;
    height: 150px;
    display: flex;
    justify-content: center;
    margin-left: 10px;
    align-items: center;
`;

function Header() {
  const [userInfo, setUserInfo] = useState('로그아웃');
  
  const handleLogout = async () => {
    userLogout();
    setUserInfo(('로그아웃'));
    window.location.href = '/';
  }

  const isLogin =  () => {
    if(document.cookie){
      setUserInfo('로그인');
    }

  }

  useEffect(() => {
    isLogin();
  },)

  

  return (
    <>
      

      <Ul className='header_user'>
        <Link to='/purchase'><Li>마이페이지</Li></Link>
        <Link to='/basket'><Li>장바구니</Li></Link>
        <Link to='/'><Li>고객센터</Li></Link>
        {document.cookie ? <><Link to='/'><Li onClick={handleLogout}>로그아웃</Li></Link></>
        : (<><Link to='/signup'><Li>회원가입</Li></Link><Link to='/user/login'><Li>로그인</Li></Link></>)}
        {/* <Li>{userInfo}</Li> */}
      </Ul>

      <Div>
        
        <Link to='/'><span><img style={{ maxWidth: '150px', width: 'auto', height: 'auto', margin: '10px' }} src='/public/image/catbaner.jpg' /></span></Link>
        
        <Search />
      </Div>
      <NavMenu />
    </>
  );
}

export default Header;
