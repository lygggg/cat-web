import React from "react";

const Header = (props) => {
return(
    <header>
    <ul>
           <li><a class="header_text" href="#">★즐겨찾기★ 강아지왕국 바로가기</a></li>
    </ul>
     <nav>
     <ul class="header_user">
           <li><a class="header_text" onclick="location.href='/login'"></a>로그인</li>
           <li><a class="header_text" href="#">회원가입</a></li>
           <li><a class="header_text" href="#">장바구니</a></li>
           <li><a class="header_text" href="#">마이페이지</a></li>
           <li><a class="header_text" href="#">고객센터</a></li>
       </ul>
   </nav>
 </header>
);
};
export default Header;