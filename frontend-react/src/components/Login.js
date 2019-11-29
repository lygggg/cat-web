import React, { useState } from "react";
import { AutoComplete } from "antd";

function Login() {
    
  
  const loginform = {
    width:100,
    maxWidth:400,
    margin: AutoComplete,
    border: '1px solid gray',
    top:50,
    left:50,
    
    
  }
  
    return (
      <form method='post' id='authForm' st='https://www.tistory.com/auth/login' >
        <input type='hidden' className='redirectUrl' value='https://blogpack.tistory.com/manage'/>
        <fieldset>
      <legend className="screen_out">로그인 정보 입력폼</legend>
      <div className="box_login">
        
        <div className="inp_text">
          <label for="loginId" className="screen_out">아이디</label>
          <input type="email" id="loginId" name="loginId" placeholder="ID" />
        </div>
        <div class="inp_text">
          <label for="loginPw" className="screen_out">비밀번호</label>
          <input type="password" id="loginPw" name="password" placeholder="Password" />
        </div>
      </div>
      <button type="submit" className="btn_login">로그인</button>
      <div className="login_append">
        <div className="inp_chk"> 
          <input type="checkbox" id="keepLogin" className="inp_radio"  name="keepLogin"/>
          <label for="keepLogin" className="lab_g">
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
        

        
        
    );
    
};
export default Login;


