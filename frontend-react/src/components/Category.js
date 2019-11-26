import React from 'react';

import{ Link } from 'react-router-dom';

function Category({ categoryName, categoryId }) {
    return(
        <Link to={`/categories/${categoryId}`}>
            <div>{categoryName}</div>
        </Link>
        
    );
}

export default Category;