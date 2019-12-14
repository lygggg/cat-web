import React from 'react';

import InfiniteCarousel from 'react-leaf-carousel';

function SubSlider() {
    return (
        <div style={{width:'1500px'}}>
        <h2 style={{textAlign: 'center'}}>이 상품 어때요?</h2>
        <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
            },
          },
        ]}
        dots={true}
        showSides={true}
        sidesOpacity={.5}
        sideSize={.1}
        slidesToScroll={4}
        slidesToShow={4}
        scrollOnDevice={true}
      >
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_ck_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/gethe.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
        <div>
          <img
            alt=''
            src='/public/image/canada_fish_canner.jpg'
          />
        </div>
      </InfiniteCarousel>
    </div>
    )
}
export default SubSlider;