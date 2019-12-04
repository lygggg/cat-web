import React, { useState } from "react";

function SignUp() {
    
    return (
        <>
        <form>
            <div>
                <label>아이디</label><br/>
                <input className="user-id" />
            </div>
            <div>
                <label >닉네임</label><br/>
                <input className="user-nick" />
            </div>
            <div>
                <label >비밀번호</label><br/>
                <input className="user-password"  />
            </div>
            <div>
                <label >비밀번호체크</label><br/>
                <input className="user-password-check" type="password" />
            </div>
            <div>
                <button type="primary" >가입하기</button>
            </div>
        </form>
        </>   

        
        
    );
    
};
export default SignUp;