import React, { useState } from "react";
import {
  Route,
  Redirect
} from "react-router-dom";

const _user = [{
  id: 'baayoo71', password: 1234
}]

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  let loginStatus = localStorage.getItem('isLogin')

  const handleLogin = () => {

    _user.map(e => {
      if (e.id == email && e.password == password) {
        login();
      }
      else {
        alert('Failed to login');
        setEmail('');
        setPassword('');
      }
    })

  }
  function login() {

    alert('로그인 성공');
    localStorage.setItem('isLogin', true);


  }


  return (
    loginStatus === 'false'  ?
      <form>
        <input type='hidden' className='redirectUrl' />
        <fieldset>
          <legend className="screen_out">로그인 정보 입력폼</legend>
          <div className="box_login">

            <div className="inp_text">
              <label className="screen_out">아이디</label>
              <input value={email} placeholder="ID" onChange={({ target: { value } }) => setEmail(value)} type='text' />
            </div>
            <div>
              <label className="screen_out">비밀번호</label>
              <input value={password} onChange={({ target: { value } }) => setPassword(value)} type="password" placeholder="Password" />
            </div>
          </div>
          <button onClick={handleLogin} className="btn_login" >로그인</button>

          <div className="login_append">
            <div className="inp_chk">
              <input type="checkbox" id="keepLogin" className="inp_radio" />
              <label className="lab_g">
                <span className="img_top ico_check"></span>
                <span className="txt_lab">로그인 상태 유지</span>
              </label>
            </div>
            <span className="txt_find">
              <a href="/member/find/loginId" className="link_find">아이디</a>
              /
           <a href="/member/find/password" className="link_find">비밀번호 찾기</a>
            </span>
          </div>

        </fieldset>

      </form>
      :
      <Redirect to='/' />



  );

};
export default Login;


