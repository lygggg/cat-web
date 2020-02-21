import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { userAuth as getUserInfo } from '../service/userService';
import { getUserProfile } from '../service/userService';

import styled from 'styled-components';

function UserModify() {
  const [userInfo, setUserInfo] = useState([]);
  const { name, email, phoneNumber } = userInfo;
  const [ userName, setUserName ] = useState(name);
  const [ userPhoneNumber, setUserPhoneNumber ] = useState(phoneNumber);
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [isLogin, setLogin] = useState('');

  const UserInfo = async () => {
    setUserInfo(await getUserInfo());
  };

  const handleLogin = async () => {
    const userProfile = await getUserProfile({ email, password });
    if (userProfile.islogin) {
        setPassword('');
        setLogin('true');
    } else {
        setLogin('false');
    }
  };

  const handleChangeInfo = async () => {
      if (!password) {
          
      }
  }

  useEffect(() => {
    UserInfo();
  }, []);

  return isLogin !== 'true' ? (
    <>
      <div style={{ width: '1920px' }}>
        <MainDiv>
          <HeaderDiv>
            <h1 style={{ fontWeight: '700' }}>개인 정보 수정</h1>
          </HeaderDiv>
          <ImageDiv>
            <img
              style={{ placeSelf: 'center' }}
              src='/public/image/h_pass_rember.png'
            />
          </ImageDiv>
          <Form>
            <InputDiv>
              <Div>아이디</Div>
              <Div style={{ color: '#0185da' }}>{email}</Div>
              <Div>비밀번호</Div>
              <Div>
                <Input
                  value={password}
                  onChange={({ target: { value } }) => setPassword(value)}
                  type='password'
                  placeholder='패스워드를 입력해주세요'
                  autoComplete='on'
                ></Input>
              </Div>
            </InputDiv>
            <div>
              <button onClick={handleLogin} type='button'>
                확인
              </button>
              <Link to='/purchase'>
                <button type='button'>취소</button>
              </Link>
            </div>
          </Form>
        </MainDiv>
      </div>
    </>
  ) : (
    <div style={{ width: '1920px' }}>
      <MainDiv>
      <h1>회원정보 수정</h1>
        <Table>
          <tbody>
            <tr>
              <TitleTd>이메일</TitleTd>
              <TextTd>{email}</TextTd>
            </tr>
            <tr>
              <TitleTd>현재 비밀번호</TitleTd>
              <TextTd>
                <PasswordInput
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                    type='password'
                    placeholder='패스워드를 입력해주세요'
                    autoComplete='off' />
              </TextTd>
            </tr>
            <tr>
              <TitleTd>새 비밀번호</TitleTd>
              <TextTd>
                <PasswordInput
                value={newPassword}
                onChange={({ target: { value } }) => setNewPassword(value)}
                type='password'
                placeholder='패스워드를 입력해주세요'
                autoComplete='off'
                />
              </TextTd>
            </tr>
            <tr>
              <TitleTd>새 비밀번호 확인</TitleTd>
              <TextTd>
                <PasswordInput
                value={checkPassword}
                onChange={({ target: { value } }) => setCheckPassword(value)}
                type='password' 
                placeholder='패스워드를 입력해주세요'
                autoComplete='off'
                />
                <ModifyButton>비밀번호 변경</ModifyButton>
              </TextTd>
            </tr>
            <tr>
              <TitleTd>이름</TitleTd>
              <TextTd>
              <PasswordInput type='name' value={name} onChange={v => setUserName(v.target.value)} />
              <ModifyButton>이름 변경</ModifyButton>
              </TextTd>
            </tr>
            <tr>
              <TitleTd>휴대폰 번호</TitleTd>
              <TextTd>
              <PasswordInput type='tel' value={phoneNumber} onChange={v => setUserPhoneNumber(v.target.value)} />
              <ModifyButton>휴대폰 번호 변경</ModifyButton>
              </TextTd>
            </tr>
          </tbody>
        </Table>
        <ButtonDiv>
          <Button onClick={handleChangeInfo}>회원정보 수정</Button>
          <Link to='/purchase'><Button>취소</Button></Link>
        </ButtonDiv>
      </MainDiv>
    </div>
  );
}

const ModifyButton = styled.button`
    margin-left: 30px;
    border-color: #bcbfc6;
    color: #777;
    background-color: #fafbf6;
    
`;

const PasswordInput = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 9px;
  border: 1px solid #ccc;
  font-size: 14px;
  color: #333;
  line-height: 20px;
  border-radius: 3px;
  background: #fff;
  outline: none;
`;

const Table = styled.table`
  height: 50px;
  border: 1px solid #e0e0e0;
  width: 900px;
  border-top: 1px solid black;
`;

const TitleTd = styled.td`
  background: #eef1f8;
  width: 150px;
  height: 70px;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 4px solid #f4f4f4;
  font-weight: bold;
  border-buttom: border: 4px solid #f4f4f4;
`;

const TextTd = styled.td`
  border-bottom: 1px solid #e4e4e4;
  padding: 10px 16px;
  font-size: 12px;
  color: #333;
  font-family: '돋움', Dotum, sans-serif;
`;

const Div = styled.div`
  height: 1px;
  font-weight: 600;
`;

const MainDiv = styled.div`
  display: grid;
  grid-gap: 50px;
  margin-top: 70px;
  place-items: center;
`;

const HeaderDiv = styled.div`
  text-align: center;
  width: 700px;
  display: grid;
  place-self: center;
  border-bottom: solid 2px;
`;

const InputDiv = styled.div`
  display: grid;
  grid-gap: 10px;
  border: solid 1px;
  width: 500px;
  height: 180px;
`;

const ImageDiv = styled.div`
  display: grid;
  grid-gap: 10px;
`;

const Form = styled.form`
  place-self: center;
  text-align-last: center;
  grid-gap: 40px;
  display: grid;
`;

const Input = styled.input`
  width: 200px;
  place-self: center;
  padding: 2px 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  display: grid;
  height: 60px;
  width: 260px;
  background: #0073e9;
  color: #fff;
  border: 2px solid #0073e9;
  border-radius: 4px;
  font-weight: 500;
  font-size: 22px;
  justify-self: center;
`;

const ButtonDiv = styled.div`
  display: grid;
  grid-template-columns: 280px 280px;
`;

export default UserModify;
