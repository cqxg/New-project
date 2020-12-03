import React from "react";

import Slider from "react-slick";
import grand from "../../img/images/Lanzarote/mainslider/grand.png";
import north from "../../img/images/Lanzarote/mainslider/north.png";
import south from "../../img/images/Lanzarote/mainslider/south.png";
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
            <img src={north} alt="slider" />
            <img className="vectorbubble" src={vector} alt="slider" />
            <h1>{t("comingSoon")}</h1>
            <p>{t("gomera")}</p>
          </div>
          <div className="mainslider__lanzarote">
            <img src={grand} alt="slider" />
            <p>{t("Lanzarote")}</p>
          </div>
          <div className="mainslider__lanzarote">
            <img src={south} alt="slider" />
            <p>{t("Lanzarote")}</p>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
