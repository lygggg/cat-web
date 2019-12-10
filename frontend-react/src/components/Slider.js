import React from 'react';
import Carousel from 'nuka-carousel';

function Slider() {
    return (
        <div style={{ width: '40%', margin: 'auto' }}>
            <Carousel>
                <img src='/public/image/event7.jpg' />
                <img src='/public/image/event2.jpg' />
                <img src='/public/image/event3.jpg' />
                <img src='/public/image/event4.jpg' />
            </Carousel>
        </div>
    );
}
export default Slider;
