import React from "react";

import Slider from "react-slick";
import rosan from "../../img/images/Lanzarote/mainslider/rosan.png";
import gomera from "../../img/images/Lanzarote/mainslider/gomera.png";
import vector from "../../img/images/Lanzarote/mainslider/vectorbuble.png";

import "./MainSlider.scss";

const MainSlider = ({ t }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    arrows: true,
    slidesToScroll: 1,
    centerMode: true,
  };

  return (
    <div className="mainslider">
      <div className="container">
        <h1>{t("chooseUIsland")}</h1>
        <Slider {...settings}>
          <div className="mainslider__gomera">
            <img src={gomera} />
            <img className="vectorbubble" src={vector} />
            <h1>{t("comingSoon")}</h1>
            <p>{t("gomera")}</p>
          </div>
          <div className="mainslider__lanzarote">
            <img src={rosan} />
            <p>{t("Lanzarote")}</p>
          </div>
          <div className="mainslider__lanzarote">
            <img src={rosan} />
            <p>{t("Lanzarote")}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
