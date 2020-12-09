import React from "react";

import Slider from "react-slick";

import "./MainSlider.scss";

const MainSlider = ({ t }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: true,
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
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
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
    <div className="mainslider">
      <div className="container">
        <h1>{t("chooseUIsland")}</h1>
        <Slider {...settings}>
          <div className="mainslider__gomera mainslider__slide empty">
            <h1>{t("comingSoon")}</h1>
            <p>{t("gomera")}</p>
          </div>
          <div className="mainslider__lanzarote mainslider__slide">
            <p>{t("Lanzarote")}</p>
          </div>
          <div className="mainslider__gomera mainslider__slide empty">
            <h1>{t("comingSoon")}</h1>
            <p>{t("gomera")}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
