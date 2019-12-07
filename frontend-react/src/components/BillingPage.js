import React from 'react';
import Purchase from '../stores/PurchaseStore';



function handleBuy() {
    Purchase.lastPayment();
}

function BillingPage() {

    return (
        <>
        <img src='/public/image/catbaner.jpg'/>
        <h1 style={{textDecorationLine: 'underline'}}>주문/결제</h1>
            
            <h2>구매자정보</h2>
                <fieldset>
                    <div>이름 <input type='text' className='name' placeholder='이름 입력'/></div>
                    <div>이메일 <input type='email' className='user_email' placeholder='이메일 입력'/></div>
                    <div>휴대폰 번호 <input type='tel' className='phone_number' placeholder='휴대폰번호 입력'/></div>
                </fieldset>
                
            <h2>받는 사람정보</h2>    
                <fieldset>
                    <div>이름 <input type='text' className='name' placeholder='이름 입력'/></div>
                    <div>배송주소 <input type='text' className='location' placeholder='배송지 입력'/></div>
                    <div>연락처 <input type='tel' className='phone_number' placeholder='연락처 입력'/></div>
                    <div>배송 요청사항 <input type='text' placeholder='요청사항 입력'/></div>
                </fieldset>
            
            <h2>결제정보</h2>
                <fieldset>
                    <div>총상품가격 </div>
                    <div>배송비 무료</div>
                    <div>총 결제금액 </div>
                    <div>결제방법 
                        <div>
                            <label>
                                <input type='radio' />카드결제 (미구현)
                                <input type='radio' />무통장입금
                                <input type='radio' />계좌이체
                            </label>
                        </div>
                    </div>
                </fieldset>
                <button onClick={() => handleBuy()}>구매하기</button>
            
            
        </>
    );

}
export default BillingPage;