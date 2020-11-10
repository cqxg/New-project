import React from "react";
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';

import Wave from "react-wavify";

import "./Header.scss";
import grandTour from "../../../img/images/Lanzarote/grand-tour.png";

const Header = () => {
  const { t } = useTranslation();
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-title">
          <h1>
            {parse(t('LanzaroteTitle'))}
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
            speed: 0.35,
            points: 3,
          }}
        />
      </div>
    </div>
  );
};

export default Header;
