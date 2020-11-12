import React from "react";

import Slider from "react-slick";
import { Blob } from "../Blob/Blob";

import "./Slider.scss";
// import "@brainhubeu/react-carousel/lib/style.css";

const Carousel = (props) => {
  const { constructor } = props;
  const sliderConstructor = constructor.slider;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    arrows: true,
    slidesToScroll: 1,
  };
  return (
    <div className="slider">
      <div className="container">
        <h1>{sliderConstructor.title}</h1>
        <Slider {...settings}>
          {sliderConstructor.items.map((item) => {
            return (
              <div className="slider__container">
                <Blob
                  style={{
                    width: "520px",
                    height: "520px",
                    marginTop: "30px",
                    marginBottom: "30px",
                    backgroundColor: "#fff",
                  }}
                  animationDuration="15s"
                >
                  <img src={item.image} alt="slide" />
                </Blob>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
