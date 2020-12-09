import React from "react";
import { useTranslation } from "react-i18next";

import dot from "../../img/images/Lanzarote/mainslider/dot.svg";
import fire from "../../img/images/GrandTour/fire.png"

import "./Cards.scss";

const Cards = ({ scheme, constructor, icon, tourname, bgimage }) => {
  const cardConstructor = constructor.price;
  const { t } = useTranslation();

  const renderCard = () => {
    if (constructor && cardConstructor) {
      return cardConstructor.map((item) => {

        return (
          <div className={`card__desc ${item.functions ? 'card__desc-functions' : ''}`}>
            <div className="card__desc--wrapper">
              <div className="card__desc-title-wrapper">
                <h3>{t(item.title)}</h3>
                {item.benefit ? <span className="card__desc--wrapper-benefit">{item.benefit}{<img src={fire} alt="benefit"></img>}</span> : null}
                <h3>{item.price}</h3>
              </div>

              <ul className="card__text--wrapper-constr">
                {item.points.map((point) => {
                  return <li>{t(point)}</li>
                })}
              </ul>
              <ul className="card__text--foot card__text--foot-constr">
                {item.description.map((descr) => {
                  return <p>{t(descr)}</p>
                })}
              </ul>
            </div>
          </div>
        )
      })
    } else {
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
      )
    }
  }

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
      return renderCard()
    default:
  }
};

export default Cards;
