import React from "react";
import { useTranslation } from "react-i18next";

import dot from "../../img/images/Lanzarote/mainslider/dot.svg";

import "./Cards.scss";

const Cards = ({ scheme, icon, tourname, bgimage }) => {
  const { t } = useTranslation();
  switch (scheme) {
    case "img-card":
      return (
        <div
          className="card__img"
          style={{ backgroundImage: `url(${bgimage})` }}
        >
          <img className="car" src={icon} alt="icon" />
          <h3>{tourname}</h3>
          <h2>{t("lanzarote")}</h2>
          <button>{t("more")}</button>
        </div>
      );
    case "desc-card":
      return (
        <div className="card__desc">
          <div className="card__desc--wrapper">
            <div className="card__desc-title-wrapper">
              <h3>{tourname}</h3>
              <h3>5,95€</h3>
            </div>

            <div className="card__text--wrapper">
              <img className="dot" src={dot} alt="dot" />
              <p>{t("sights")}</p>
            </div>
            <div className="card__text--wrapper">
              <img className="dot" src={dot} alt="dot" />
              <p>{t("minAudioContent")}</p>
            </div>
            <div className="card__text--wrapper">
              <img className="dot" src={dot} alt="dot" />
              <p>{t("addvantage")}</p>
            </div>
            <div className="card__text--foot">
              <p>{t("purchase")}</p>
              <p>{t("offlineUse")}</p>
              <p>{t("connection")}</p>
            </div>
          </div>
        </div>
      );
    default:
  }
};

export default Cards;
