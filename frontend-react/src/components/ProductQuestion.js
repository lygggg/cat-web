import React, { useState } from "react";

function ProductQuestion({ question }) {
  return (
    <>
      <div>
        {question.name}
        </div>
        <div style={{ marginRight: 'auto' }}>
        {question.content}
        </div>
        <div>
        {question.date}
        </div>
    </>
  );
}

export default ProductQuestion;
