import React from 'react';
import Carousel from 'nuka-carousel';



function slider() {
    return (
        <div style={{ width: '50%', margin: 'auto' }}>

            <Carousel>
                <img src='/public/image/event7.jpg' />
                <img src='/public/image/event2.jpg' />
                <img src='/public/image/event3.jpg' />
                <img src='/public/image/event4.jpg' />
            </Carousel>
        </div>

    )
}
export default slider;