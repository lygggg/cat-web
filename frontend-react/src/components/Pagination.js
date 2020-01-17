import React from 'react';

function Pagination({ total, pageSize, onPageChange }) {
  const pagesCount = Math.ceil(total / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
            <button>이전</button>
        {
              pages.map(e => (
                <button onClick={() => onPageChange(e)} 
                      key={e}>
                      {e}
                </button>
                ))
            }
            <button>다음</button>
    </div>
  );
}

export default Pagination;
