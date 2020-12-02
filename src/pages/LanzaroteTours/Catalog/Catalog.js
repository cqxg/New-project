import React from "react";
import { useTranslation } from "react-i18next";

import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import bubbleGroup from "../../../components/Bubbles/BubbleGroup";
import Button from "../../../components/Buttons/Button";

import grand from "../../../img/images/Lanzarote/mainslider/grand.png";
import north from "../../../img/images/Lanzarote/mainslider/north.png";
import south from "../../../img/images/Lanzarote/mainslider/south.png";
import car from "../../../img/images/Lanzarote/mainslider/car.svg";

import "./Catalog.scss";

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <div className="сatalog">
      <BreadCrumbs scheme="catalog" />
      <div className="container">
        <div className="lanzarote-tours">
          {bubbleGroup()}
          <h1 className="lanzarote-tours__title">{t("LanzaroteTours")}</h1>
          <p className="lanzarote-tours__desc">{t("LanzaroteToursDesc")}</p>
          <div className="lanzarote-tours__cards">
            <div className="card-wrapper">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${grand})` }}
              >
                <img className="car" src={car} alt="car" />
                <h3>{t("grandTour")}</h3>
                <h2>{t("lanzarote")}</h2>
                <button>{t("more")}</button>
              </div>

              <div className="card__desc"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
