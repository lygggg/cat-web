import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import styled from 'styled-components';
import Slider from './Slider';
import SubSlider from './SubSlider';


function Home() {
  const [isLogin, setIsLogin] = useState(localStorage.getItem('isLogin'));
4

  function handleLogout() {
    localStorage.setItem('isLogin', false);
    setIsLogin(localStorage.getItem('isLogin'));
  }
  const Div = styled.div`
    margin-top: 100px;
  `;

  return (
    <>
    
      <Slider />
      
      <Div>
      <SubSlider />
      </Div>
    </>
  );
}

export default Home;