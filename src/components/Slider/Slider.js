import React, { useState, useEffect } from 'react';

import Slider from 'react-slick';
import { Blob } from '../Blob/Blob';

import './Slider.scss';

const Carousel = (props) => {
  const { constructor } = props;
  const sliderConstructor = constructor.slider;
  const [sm, setSm] = useState(false)

  document.addEventListener('scroll', () => {
    if (window.innerWidth < 700) setSm(true)
    else setSm(false)
  })

  useEffect(() => {
    if (window.innerWidth < 700) setSm(true)
  }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: sm ? 1 : 2,
    arrows: !sm,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          arrows: true,
          slidesToScroll: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: true,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="slider">
      <div className="container">
        <h1>{sliderConstructor.title}</h1>
        <Slider {...settings}>
          {sliderConstructor.items.map((item) => (
            <div className="slider__container">
              <Blob
                style={{
                  width: '520px',
                  height: '520px',
                  marginTop: '30px',
                  marginBottom: '30px',
                  backgroundColor: '#fff',
                }}
                animationDuration="15s"
              >
                <img src={item.image} alt="slide" />
              </Blob>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
