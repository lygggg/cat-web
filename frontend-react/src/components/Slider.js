import React from 'react';
import Carousel from 'nuka-carousel';

function Slider() {
    return (
        <div style={{ width: 'auto', height: 'auto' , margin: 'auto' }}>
            <Carousel>
                <img src='/public/image/baner1.jpg' />
                <img src='/public/image/baner2.jpg' />
                <img src='/public/image/baner3.jpg' />
                <img src='/public/image/baner4.jpg' />
            </Carousel>
        </div>
    );
}
export default Slider;
