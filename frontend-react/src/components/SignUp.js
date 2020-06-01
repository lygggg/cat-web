import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { userSignUp } from "../apis/auth";
import Swal from "sweetalert2";

const GridDiv = styled.div`
  display: grid;
  justify-content: center;
  height: 600px;
  width: 1890px;
`;

const SignForm = styled.form``;

const InputDiv = styled.div``;

const Input = styled.input`
  width: 300px;
  height: 40px;
`;

const Label = styled.span`
  display: inline-block;
  width: 120px;
  margin-top: 30px;
  font-size: 13px;
  font-weight: bold;
`;

const Span = styled.span``;

const SignButton = styled.button`
  display: block;
  width: 340px;
  height: 54px;
  margin: 45px auto 0;
  border: 0 none;
  border-radius: 3px;
  background-color: #0074e9;
  font-size: 16px;
  color: #fff;
  line-height: 44px;
  letter-spacing: -0.3px;
`;

function SignUp() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [location, setLocation] = useState("");

  const onRegister = async event => {
    event.preventDefault();
    event.stopPropagation();
    if (password === checkPassword) {
     const signUp = await userSignUp({
        email,
        password,
        name,
        phoneNumber,
        location
      });
      
      if(signUp.statusText === "OK") {
        Swal.fire(
          'Good job!',
          '회원가입 완료!',
          'success'
        ).then(() => {
            history.push('/');
        })
      }
      else {
        Swal.fire(
          'Noob!!',
          '회원가입 실패!',
          'error')
      }
    }
  };

  return (
    <GridDiv>
      <h2 style={{ textAlign: "center" }}>회원가입</h2>
      <SignForm onSubmit={onRegister}>
        <InputDiv>
          <Span>
            <Label>아이디*</Label>
          </Span>
          <Input
            placeholder="이메일 형식으로 입력해주세요."
            value={email}
            type="email"
            onChange={v => setEmail(v.target.value)}
          />
        </InputDiv>
        <InputDiv>
          <Span>
            <Label>비밀번호*</Label>
          </Span>
          <Input
            type="password"
            value={password}
            placeholder="비밀번호
                (영문 숫자 특수문자 2가지 이상 6~15자 이내)"
            onChange={v => setPassword(v.target.value)}
          />
        </InputDiv>
        <div>
          <Span>
            <Label>비밀번호확인*</Label>
          </Span>
          <Input
            type="password"
            value={checkPassword}
            placeholder="비밀번호 확인"
            onChange={v => setCheckPassword(v.target.value)}
          />
        </div>
        <div>
          <Span>
            <Label>이름*</Label>
          </Span>
          <Input
            type="name"
            value={name}
            placeholder="이름"
            onChange={v => setName(v.target.value)}
          />
        </div>
        <div>
          <Span>
            <Label>휴대폰*</Label>
          </Span>
          <Input
            type="tel"
            value={phoneNumber}
            placeholder="-을 입력하지마세요."
            onChange={v => setPhoneNumber(v.target.value)}
          />
        </div>
        <div>
          <Span>
            <Label>주소*</Label>
          </Span>
          <Input
            type="text"
            value={location}
            placeholder="아무 주소나 입력해주세요"
            onChange={v => setLocation(v.target.value)}
          />
        </div>

        <div>
          <SignButton type="primary">동의하고 가입하기</SignButton>
        </div>
      </SignForm>
    </GridDiv>
  );
}
export default SignUp;
