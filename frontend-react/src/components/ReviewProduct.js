import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Grid = styled.div`
    display: grid;
    grid-template-columns: 200px 500px 200px;
    grid-template-rows: 200px;
    align-items: center;
    justify-items: center;
`;

const Button = styled.button`
    background-color: #3d82f7;
    color: white;
    border: 1px solid #4386f4;
    border-radius: 3px;
    padding: 5px;
    padding-lef t: 20px;
    padding-right: 20px;
    margin: 2px;
    
`;

function ReviewProduct({ product }) {

  return (
    <Grid>
      <Link to={`/products/${product.id}`}>
                <div style={{ display: 'block', textAlign: "center" }}><img src={product.imageurl}
                    alt=""
                    width="70%"
                /></div>
      </Link>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div>{product.title}</div>{product.count}개
      </Link>
      <div>
        <Link to={`/review/${product._id}`}><Button>리뷰작성</Button></Link>
      </div>
    </Grid>
  );
}
export default ReviewProduct;