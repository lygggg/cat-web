import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Search(props) {
  const [searchTerm, setSearchTerm] = useState('');

    return (

        <>
            <form style={{ display: 'inline-block', height: '40px', border: '2px solid #e0e0e0', background: 'white' }}>
            <input style={{ fontSize: '16px', width: '385px', height: '25px', padding: '5px', border: '0px', }} type='input' value={searchTerm} onChange={({ target: { value } }) => setSearchTerm(value)} placeholder="   [투데이 특가] 매일 놀라운 가격"/>
                <Link to={`/search?q=${searchTerm}`}><button type='submit' style={{ width: '54px', height: '40px',marginLeft:'10px', border: '0px', background: '#1b5ac2', outline: 'none', color: 'white' }} onClick={() => { props.handleSearch(searchTerm) }}>검색</button></Link>
            </form>
        </>

    )
}
export default Search;
