import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { getSearchProducts as searchProducts } from '../service/taskService'

function Search({handleSearch}) {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

    return (

        <>
            <form style={{ display: 'inline-block', height: '40px', border: '2px solid #e0e0e0', background: 'white' }}>
            <input style={{ fontSize: '16px', width: '385px', height: '25px', padding: '5px', border: '0px', }} type='input' value={searchTerm} placeholder="   [투데이 특가] 매일 놀라운 가격"
                    onChange={handleChange}/>
                <Link to={`/search?q=${searchTerm}`}><button type='submit' style={{ width: '54px', height: '40px',marginLeft:'10px', border: '0px', background: '#1b5ac2', outline: 'none', color: 'white' }} onClick={() => { handleSearch(searchTerm) }}>검색</button></Link>
            </form>
        </>

    )
}
export default Search;
