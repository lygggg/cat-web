import React from "react";

const menu = (props) => {
    return (
        <header>
            <ul>
                <div><a class="menu_text">menu</a></div>
            </ul>
            <nav>
                <ul class="header_user">
                    <li><a class="menu_text" href="#">브랜드사료</a></li>
                    <li><a class="menu_text" href="#">캔/파우치</a></li>
                    <li><a class="menu_text" href="#">모래</a></li>
                    <li><a class="menu_text" href="#">간식</a></li>
                </ul>
            </nav>
        </header>
    );
};
export default menu;