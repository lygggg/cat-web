import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Span = styled.span`
    color: #333;
`;

function Category({ categoryName, categoryId }) {
  return (
    <>
      <Link to={`/categories/${categoryId}/page/1`} style={{textDecoration: 'none'}}>
        <Span>{categoryName}</Span>
        </Link>
    </>
  );
}

export default Category;
