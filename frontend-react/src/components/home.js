import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import productStore from '../stores/ProductStore';
import Slider from './Slider';
import SearchResult from './SearchResult';


const Ul = styled.ul`
  width: 1450px;
`

const Li = styled.li`

    list-style: none;
    margin: 10px;
    padding: 0px;
    text-decoration: none;
    float: right;
    background-color: white;
`;

const Span = styled.span`
  
`;

const Div = styled.div`
    text-align: center;
    width: 1500px;
    height: 100px;
    border: 1px solid black;
    /* margin-right: 10px; */
`;

function Home() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));

  const categories = productStore.categories;

  function handleLogout() {
    localStorage.setItem('isLogin', false);
    setIsLogin(localStorage.getItem('isLogin'));
  }

  return (
    <>
      <Slider />
      
    </>
  );
}

export default Home;