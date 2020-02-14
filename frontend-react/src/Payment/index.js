import React, { useState, useEffect } from "react";

import { userAuth as getUserInfo } from "../service/userService";
import { getPrice as getPaymentPrice} from '../service/paymentService';
import ProductStore from "../stores/ProductStore";

import styled from "styled-components";
import { Link } from "react-router-dom";

import { Form, Select, Icon, Input, Switch, Button } from "antd";
import { withRouter } from "react-router-dom";
import { withUserAgent } from "react-useragent";
import queryString from "query-string";

import "antd/dist/antd.css";

import {
  PGS,
  METHODS_FOR_INICIS,
  QUOTAS_FOR_INICIS_AND_KCP
} from "./constants";
import { getMethods, getQuotas } from "./utils";

const { Item } = Form;
const { Option } = Select;

function Payment({ history, form, ua }) {
  const [products, setProducts] = useState([]);
  const [userInfo, setUserInfo] = useState([]);
  const [orderName, setOrderName] = useState('');
  const [Price, setPrice] = useState(0);
  const [requestTerm, setRequestTerm] = useState("안전하게 배송 해주세요");
  const { name, phoneNumber, location, email } = userInfo;
  const [methods, setMethods] = useState(METHODS_FOR_INICIS);
  const [quotas, setQuotas] = useState(QUOTAS_FOR_INICIS_AND_KCP);
  const [isQuotaRequired, setIsQuotaRequired] = useState(true);
  const [isDigitalRequired, setIsDigitalRequired] = useState(false);
  const [isVbankDueRequired, setIsVbankDueRequired] = useState(false);
  const [isBizNumRequired, setisBizNumRequired] = useState(false);
  const {
    getFieldDecorator,
    validateFieldsAndScroll,
    setFieldsValue,
    getFieldsValue
  } = form;

  function handleSubmit(e) {
    e.preventDefault();

    validateFieldsAndScroll((error, values) => {
      if (!error) {
        /* 가맹점 식별코드 */
        const userCode = "imp02805801";
        /* 결제 데이터 */
        const {
          pg,
          pay_method,
          merchant_uid,
          name,
          amount,
          buyer_name,
          buyer_tel,
          buyer_email,
          escrow,
          card_quota,
          biz_num,
          vbank_due,
          digital
        } = values;

        const data = {
          pg,
          pay_method,
          merchant_uid,
          name,
          amount,
          buyer_name,
          buyer_tel,
          buyer_email,
          escrow
        };

        if (pay_method === "vbank") {
          data.vbank_due = vbank_due;
          if (pg === "danal_tpay") {
            data.biz_num = biz_num;
          }
        }
        if (pay_method === "card") {
          if (card_quota !== 0) {
            data.digital = { card_quota: card_quota === 1 ? [] : card_quota };
          }
        }
        if (pay_method === "phone") {
          data.digital = digital;
        }

        if (isReactNative()) {
          /* 리액트 네이티브 환경일때 */
          const params = {
            userCode,
            data,
            type: "payment" // 결제와 본인인증을 구분하기 위한 필드
          };
          const paramsToString = JSON.stringify(params);
          window.ReactNativeWebView.postMessage(paramsToString);
        } else {
  
          /* 웹 환경일때 */
          const { IMP } = window;
          IMP.init(userCode);
          IMP.request_pay(data, callback);
        }
      }
    });
  }

  function callback(response) {
    const query = queryString.stringify(response);
    history.push(`/payment/result?${query}`);
  }

  function onChangePg(value) {
    /* 결제수단 */
    const methods = getMethods(value);
    setMethods(methods);
    setFieldsValue({ pay_method: methods[0].value });

    /* 할부개월수 설정 */
    const { pay_method } = getFieldsValue();
    handleQuotas(value, pay_method);

    /* 사업자번호/입금기한 설정 */
    let isBizNumRequired = false;
    let isVbankDueRequired = false;
    if (pay_method === "vbank") {
      if (value === "danal_tpay") {
        isBizNumRequired = true;
      }
      isVbankDueRequired = true;
    }
    setisBizNumRequired(isBizNumRequired);
    setIsVbankDueRequired(isVbankDueRequired);
  }

  function onChangePayMethod(value) {
    const { pg } = getFieldsValue();
    let isQuotaRequired = false;
    let isDigitalRequired = false;
    let isVbankDueRequired = false;
    let isBizNumRequired = false;
    switch (value) {
      case "card": {
        isQuotaRequired = true;
        break;
      }
      case "phone": {
        isDigitalRequired = true;
        break;
      }
      case "vbank": {
        if (pg === "danal_tpay") {
          isBizNumRequired = true;
        }
        isVbankDueRequired = true;
        break;
      }
      default:
        break;
    }
    setIsQuotaRequired(isQuotaRequired);
    setIsDigitalRequired(isDigitalRequired);
    setIsVbankDueRequired(isVbankDueRequired);
    setisBizNumRequired(isBizNumRequired);

    /* 할부개월수 설정 */
    handleQuotas(pg, value);
  }

  function handleQuotas(pg, pay_method) {
    const { isQuotaRequired, quotas } = getQuotas(pg, pay_method);
    setIsQuotaRequired(isQuotaRequired);
    setQuotas(quotas);
    setFieldsValue({ card_quota: quotas[0].value });
  }

  function isReactNative() {
    /*
        리액트 네이티브 환경인지 여부를 판단해
        리액트 네이티브의 경우 IMP.payment()를 호출하는 대신
        iamport-react-native 모듈로 post message를 보낸다
  
        아래 예시는 모든 모바일 환경을 리액트 네이티브로 인식한 것으로
        실제로는 user agent에 값을 추가해 정확히 판단해야 한다
      */
    if (ua.mobile) return true;
    return false;
  }

  function modifyRequestTerm() {
    var retVal = prompt("요청사항 변경 : ", requestTerm);
    setRequestTerm(retVal);
  }

  const UserInfo = async () => {
    const Info = await getUserInfo();
    setUserInfo(Info);
  };

  const fetchPrice = async () => {
    setPrice((await getPaymentPrice(ProductStore.paymentProducts[0].map(product=> { return {'id': product._id, 'count': product.count} }))).price)
  };

  useEffect(() => {
    UserInfo();
    setProducts(ProductStore.paymentProducts[0]);
    setOrderName(ProductStore.paymentProducts[0].map(i=> { return `${i.title}` }));
    fetchPrice();
  }, []);

  return (
    <GridDiv>
      <div style={{ borderBottom: "1px solid black" }}>
        <img src="/public/image/catbaner.jpg" />
      </div>
      <h1 style={{ borderBottom: "3px solid black" }}>주문/결제</h1>
      <div>
        <h2>구매자정보</h2>
        <Table>
          <tbody>
            <tr>
            <TitleTd>이름</TitleTd>
              <TextTd>
                {getFieldDecorator("buyer_name", {
                  initialValue: name,
                  rules: [
                    { required: true, message: "구매자 이름은 필수입력입니다" }
                  ]
                })(<span>{name}</span>)}
              </TextTd>
            </tr>
            <tr>
            <TitleTd>이메일</TitleTd>
              <TextTd>
                {getFieldDecorator("buyer_email", {
                  initialValue: email,
                  rules: [
                    {
                      required: true,
                      message: "구매자 이메일은 필수입력입니다"
                    }
                  ]
                })(<span>{email}</span>)}
              </TextTd>
            </tr>
            <tr>
            <TitleTd>휴대폰 번호</TitleTd>
              <TextTd>
                {getFieldDecorator("buyer_tel", {
                  initialValue: phoneNumber,
                  rules: [
                    {
                      required: true,
                      message: "구매자 전화번호는 필수입력입니다"
                    }
                  ]
                })(<span>{phoneNumber}</span>)}
              </TextTd>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h2>받는 사람정보</h2>
        <Table>
          <tbody>
            <tr>
              <TitleTd>이름</TitleTd>
              <TextTd>{name}</TextTd>
            </tr>
            <tr>
              <TitleTd>배송주소</TitleTd>
              <TextTd>{location}</TextTd>
            </tr>
            <tr>
              <TitleTd>연락처</TitleTd>
              <TextTd>{phoneNumber}</TextTd>
            </tr>
            <tr>
              <TitleTd>배송 요청사항</TitleTd>
              <TextTd>
                {requestTerm}{" "}
                <button onClick={() => modifyRequestTerm()}>변경</button>
              </TextTd>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <h2>결제 상품</h2>
        <div style={{border: '1px solid #ccc'}}>
        <GridInfo></GridInfo>
          {products.map(product => 
            <Grid key={product._id}>
          <TitleSpan>{product.title}</TitleSpan>
          <span>{product.count}개</span>
          <span>{product.count * product.price}원</span>
            </Grid>
          )}
          </div>
          </div>
      <div>
        <h2>결제정보</h2>
        <Table>
          <tbody>
          {getFieldDecorator("name", {
                initialValue: orderName.toString(),
              })( <tr>
                <TitleTd>결제명</TitleTd>
                <TextTd>
                  {orderName.toString()}
                </TextTd>
              </tr>)}
              {getFieldDecorator("merchant_uid", {
                initialValue: `${new Date().getTime()}`,
                rules: [
                  { required: true, message: "주문번호는 필수입력입니다" }
                ]
              })( <tr>
                <TitleTd>주문번호</TitleTd>
                <TextTd>
                {new Date().getTime()}
                </TextTd>
              </tr>)}
            <tr>
              <TitleTd>총상품가격</TitleTd>
              <TextTd>
              {Price - 2500}원
              </TextTd>
            </tr>
            <tr>
              <TitleTd>배송비</TitleTd>
              <TextTd>
                2500원
              </TextTd>
            </tr>
            <tr>
              <TitleTd>총결제금액</TitleTd>
              <TextTd>
              {getFieldDecorator("amount", {
                initialValue: Price,
                rules: [
                  { required: true, message: "결제금액은 필수입력입니다" }
                ] 
              })(<span>{Price}원</span>)}
              </TextTd>
            </tr>
          </tbody>
        </Table>
        <Wrapper>
          <FormContainer onSubmit={handleSubmit}>
            <Span>
            {getFieldDecorator("pg", {
                initialValue: "html5_inicis"
              })(<span style={{ fontSize: '35px', textAlign: 'center', marginTop:'13px' }}>결제</span>)}
            <Item label="결제수단">
              {getFieldDecorator("pay_method", {
                initialValue: "card"
              })(
                <Select
                  size="large"
                  onChange={onChangePayMethod}
                  suffixIcon={<Icon type="caret-down" />}
                >
                  {methods.map(method => {
                    const { value, label } = method;
                    return (
                      <Option value={value} key={value}>
                        {label}
                      </Option>
                    );
                  })}
                </Select>
              )}
            </Item>
            {isQuotaRequired && (
              <Item label="할부개월수">
                {getFieldDecorator("card_quota", {
                  initialValue: 0
                })(
                  <Select size="large" suffixIcon={<Icon type="caret-down" />}>
                    {quotas.map(quota => {
                      const { value, label } = quota;
                      return (
                        <Option value={value} key={value}>
                          {label}
                        </Option>
                      );
                    })}
                  </Select>
                )}
              </Item>
            )}
            {isVbankDueRequired && (
              <Item>
                {getFieldDecorator("vbank_due", {
                  rules: [
                    { required: true, message: "입금기한은 필수입력입니다" }
                  ]
                })(
                  <Input
                    size="large"
                    type="number"
                    addonBefore="입금기한"
                    placeholder="YYYYMMDDhhmm"
                  />
                )}
              </Item>
            )}
            {isBizNumRequired && (
              <Item>
                {getFieldDecorator("biz_num", {
                  rules: [
                    { required: true, message: "사업자번호는 필수입력입니다" }
                  ]
                })(
                  <Input size="large" type="number" addonBefore="사업자번호" />
                )}
              </Item>
            )}
            {isDigitalRequired && (
              <Item label="실물여부" className="toggle-container">
                {getFieldDecorator("digital", {
                  valuePropName: "checked"
                })(<Switch />)}
              </Item>
            )}
            <Item label="에스크로" className="toggle-container">
              {getFieldDecorator("escrow", {
                valuePropName: "checked"
              })(<Switch />)}
            </Item>
            </Span>
            <Item style={{ textAlign: "-webkit-center" }}>
              <BuyButton type="primary" htmlType="submit" size="large">
                결제하기
              </BuyButton>
            </Item>
          </FormContainer>
        </Wrapper>
      </div>
    </GridDiv>
  );
}
const Span = styled.span`
  display: grid;
  flex-gap: ;
  grid-column: 10px 20px 30px;
  grid-template-columns: 100px 200px 200px 130px;
  grid-gap: 70px;
`;
const TitleSpan = styled.span`
  width: 350px;
  font-size: 17px;
  font-weight: 700;
`;

const GridInfo = styled.div`
  width: 900px;
  height: 50px;
  align-items: center;
  justify-items: center;
  grid-template-rows: 50px;
  background-color: #fafafa;
  font-weight: bold;
`;

const Grid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 440px 350px 100px;
  grid-template-rows: 125px 10px;
  justify-items: center;
  border-bottom: 1px solid #e0e0e0;;
`;

const GridDiv = styled.div`
  display: grid;
  grid-gap: 40px;
  justify-content: center;
  width: 1880px;
  height: 1500px;
`;

const Table = styled.table`
  height: 50px;
  border: 1px solid #e0e0e0;
  width: 900px;
  border-top: 1px solid black;
`;

const TitleTd = styled.td`
  background: #f4f4f4;
  width: 150px;
  height: 40px;
  font-size: 13px;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 4px solid #f4f4f4;
  font-weight: bold;
`;

const TextTd = styled.td`
  border-bottom: 1px solid #e4e4e4;
  padding: 10px 16px;
  font-size: 12px;
  color: #333;
  font-family: "돋움", Dotum, sans-serif;
`;

const BuyButton = styled.button`
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

const Wrapper = styled.div`
  padding: 5rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const FormContainer = styled.form`
  border-radius: 3px;

  .ant-row {
    margin-bottom: 1rem;
  }
  .ant-form-item {
    align-items: center;
  }
  .ant-col.ant-form-item-label {
    padding: 0 11px;
    text-align: left;
    label {
      color: #888;
      font-size: 1.2rem;
    }
    & + .ant-col.ant-form-item-control-wrapper {
      .ant-form-item-control {
        line-height: inherit;
      }
    }
  }
  .ant-col.ant-form-item-label > label::after {
    display: none;
  }
  .ant-row.ant-form-item.toggle-container .ant-form-item-control {
    padding: 0 11px;
    height: 4rem;
    display: flex;
    align-items: center;
    .ant-switch {
      margin: 0;
    }
  }

  .ant-form-explain {
    margin-top: 0.5rem;
    margin-left: 9rem;
  }

  .ant-input-group-addon:first-child {
    text-align: left;
    color: #888;
    font-size: 1.2rem;
    border: none;
    background-color: inherit;
  }
  .ant-input-group > .ant-input:last-child {
    border-radius: 4px;
  }

  .ant-col {
  }

  button[type="submit"] {
    height: 5rem;
    font-size: 1.6rem;
    margin-top: 2rem;
  }
`;

const PaymentForm = Form.create({ name: "payment" })(Payment);

export default withUserAgent(withRouter(PaymentForm));
