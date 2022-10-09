import React from 'react';
import Slider from 'react-slick';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function Slide({ children }) {
  return (
    <section className='overflow-hidden'>
      <Slider {...settings}>{children}</Slider>
    </section>
  );
}
export default Slide;
