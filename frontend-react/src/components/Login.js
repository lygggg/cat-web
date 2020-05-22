import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import Popup from "reactjs-popup";

import styled from 'styled-components';

import { getUserProfile } from '../service/userService';

const Div = styled.form`
  display: grid;
  height: 230px;
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
  height: 7px;
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

const FalseDiv = styled.div`
  color: red;
  height: 18px;
  width: 300px;
  font-size: 11px;
`;

function Login() {
  const [isLogin, setLogin] = useState(localStorage.getItem('isLogin'));
  const [falsePassword, setFalsePassword] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const successesLogin = () => {
    localStorage.setItem('isLogin',true);
    setLogin('true');
  };

  const falseLogin = () => {
    setFalsePassword(false);
    setEmail('');
    setPassword('');
  };

  const handleLogin = async () => {
    setFalsePassword(true);
    const userProfile = await getUserProfile({ email, password });
    if (userProfile.islogin) {
      successesLogin();
    } else {
      falseLogin();
    }
  };

  return (
    isLogin !== 'true' ?
      <div style={{ height: '460px', display: 'grid', justifyContent: 'center', padding: '50px', width: 'width: 1890px' }}>
        <h3 style={{ textAlign: 'center' }}>로그인</h3>
        <Div autoComplete='off'>
          <Input value={email} placeholder="아이디를 입력해주세요" onChange={({ target: { value } }) => setEmail(value)} type='email' autoComplete='on'/>
          <Input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" placeholder="패스워드를 입력해주세요" autoComplete="false" maxlength="30"/>
          <SearchDiv className="txt_find">    
            <A>아이디</A>
            <A> / </A>
            <A>비밀번호 찾기</A>
          </SearchDiv>
          {falsePassword === false ? 
        <FalseDiv>이메일 또는 비밀번호를 다시 확인하세요. 등록되지 않은 이메일이거나, 비밀번호를 잘못 입력하셨습니다.</FalseDiv>
        : <></>
        } 
          
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
