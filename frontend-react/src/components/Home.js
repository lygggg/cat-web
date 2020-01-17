import React, { useState } from 'react';

import styled from 'styled-components';
import Slider from './Slider';
import SubSlider from './SubSlider';


function Home() {
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
