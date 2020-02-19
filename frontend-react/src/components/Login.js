import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";

import styled from 'styled-components';

import { getUserProfile } from '../service/userService';

const Div = styled.form`
  display: grid;
  height: 200px;
  margin-bottom: 8px;
`;

const ButtonDiv = styled.div`
  display: grid;
  width: 300px;
  height: 50px;
  grid-gap: 9px;
`;

const SearchDiv = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const LoginButton = styled.button`
    background: #0074e9;
    color: white;
    font-weight: bold;
    border: #0074e9;
`;

const SignUpButton = styled.button`
  background: white;
  color: #0074e9;
  font-weight: bold;
  border: 1px solid black;
`;

const A = styled.a`
  font-size: 12px;
  text-decoration: none;
  color: #333;
  margin: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0 19px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 3px;
  font-size: 14px;
`;

function Login() {
  const [isLogin, setLogin] = useState(localStorage.getItem('isLogin'));
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const successesLogin = () => {
    localStorage.setItem('isLogin',true);
    setLogin('true');
  };

  const falseLogin = () => {
    alert('아이디 또는 패스워드를 다시 입력해주세요.');
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    const userProfile = await getUserProfile({ email, password });
    if (userProfile.islogin) {
      successesLogin();
    } else {
      falseLogin();
    }
  };

  return (
    isLogin !== 'true' ?
      <div style={{ display: 'grid', justifyContent: 'center', padding: '50px', width: 'width: 1890px' }}>
        <h3 style={{ textAlign: 'center' }}>로그인</h3>
        <Div>
          <Input value={email} placeholder="아이디를 입력해주세요" onChange={({ target: { value } }) => setEmail(value)} type='email' autoComplete='on'/>
          <Input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" placeholder="패스워드를 입력해주세요" autoComplete='on'/>
          <SearchDiv className="txt_find">
            <A href="/member/find/loginId">아이디</A>
            <A> / </A>
            <A href="/member/find/password" >비밀번호 찾기</A>
          </SearchDiv>
          <LoginButton onClick={handleLogin} className="btn_login" type="button">로그인</LoginButton>
        </Div>
        <ButtonDiv>
        <SignUpButton className="btn_login" ><Link style= {{textDecoration: 'none'}} to='/signup'>회원가입</Link></SignUpButton>
        </ButtonDiv>
        <div className="login_append">
          <div className="inp_chk">
            <input type="checkbox" id="keepLogin" className="inp_radio" />
            <label className="lab_g">
              <span className="img_top ico_check"></span>
              <span style={{ fontSize: '12px', fontWeight: 'bold' }}>로그인 상태 유지</span>
            </label>
          </div>
        </div>
      </div>
      : <Redirect to="/" />
  );
}
export default Login;
