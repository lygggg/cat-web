import React, { useState, useEffect } from "react";

function ProductQuestion({ question }) {
  const [email, setEmail] = useState();

  const mosaicEmail = () => {
    setEmail(
      question.email.substring(
        0,
        question.email.split("").findIndex((e) => e === "@") - 2
      )
    );
  };

  useEffect(() => {
    mosaicEmail();
  });
  return (
    <>
      <div style={{ fontWeight: 'bold', color: 'black' }}>{email}@**</div>
      <div style={{ marginRight: "auto", marginLeft: '10px' }}>{question.content}</div>
      <div>{question.date}</div>
    </>
  );
}

export default ProductQuestion;
