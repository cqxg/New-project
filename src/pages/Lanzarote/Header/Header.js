import React from "react";

import Wave from "react-wavify";

import "./Header.scss";

import grandTour from "../../../img/images/Lanzarote/grand-tour.png";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-title">
          <h1>
            Your warm and <br />
            colorful Lanzarote
          </h1>
        </div>
        <div className="header__container-tours">
          <div className="header__container-tour active">A</div>
          <div className="header__container-tour">
            <img src={grandTour} alt="grandTour" />
          </div>
          <div className="header__container-tour">N</div>
          <div className="header__container-tour">S</div>
        </div>
      </div>
      <div className="header__wave">
        <Wave
          fill="#fff"
          paused={false}
          options={{
            height: 20,
            amplitude: 30,
            speed: 0.15,
            points: 3,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
