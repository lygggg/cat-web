import React from "react";

const canner = (props) => {
    return(
        <div>
        <div className = "foodName"><h2>{props.foodName}</h2></div>
        <div className = "foodPrice"><h3>{props.foodPrice}</h3></div>
        <div className = "foodExplanation"><p>{props.foodExplanation}</p></div>
        <div><img src = "/public/image/canner.jpg"></img ></div>
        </div>
    );
};
export default canner;