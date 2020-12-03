import React from "react";
import { useTranslation } from "react-i18next";

import Cards from "../../../components/Cards/Cards";
import bubbleGroup from "../../../components/Bubbles/BubbleGroup";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";

import grand from "../../../img/images/Lanzarote/mainslider/grand.png";
import north from "../../../img/images/Lanzarote/mainslider/north.png";
import south from "../../../img/images/Lanzarote/mainslider/south.png";
import womanwire from "../../../img/images/Lanzarote/mainslider/womanwire.svg";

import homeimg from "../../../img/images/Lanzarote/mainslider/homeimg.svg";
import car from "../../../img/images/Lanzarote/mainslider/car.svg";

import "./Catalog.scss";
import RenderBackgroundBubbles from "../../../components/RenderBgBubbles";

const Catalog = () => {
  const { t } = useTranslation();

  return (
    <div className="сatalog">
      {RenderBackgroundBubbles()}
      <BreadCrumbs scheme="catalog" />
      <div className="container">
        <div className="lanzarote-tours">
          {bubbleGroup()}
          <h1 className="lanzarote-tours__title">{t("LanzaroteTours")}</h1>
          <p className="lanzarote-tours__desc">{t("LanzaroteToursDesc")}</p>
          <div className="lanzarote-tours__cards">
            <div className="card-wrapper">
              <Cards
                icon={car}
                bgimage={grand}
                scheme="img-card"
                tourname={t("grandTour")}
              />
              <Cards scheme="desc-card" tourname={t("grandTour")} />
            </div>
            <div className="card-wrapper">
              <Cards
                icon={car}
                bgimage={north}
                scheme="img-card"
                tourname={t("northTour")}
              />
              <Cards scheme="desc-card" tourname={t("northTour")} />
            </div>
            <div className="card-wrapper">
              <Cards
                icon={car}
                bgimage={south}
                scheme="img-card"
                tourname={t("southTour")}
              />
              <Cards scheme="desc-card" tourname={t("southTour")} />
            </div>
          </div>
        </div>

        <div className="lanzarote-audiobook">
          <h1 className="lanzarote-audiobook__title">
            {t("lanzaroteAudiobook")}
          </h1>
          <div className="lanzarote-tours__cards">
            <div className="card-wrapper">
              <Cards
                icon={homeimg}
                scheme="img-card"
                bgimage={womanwire}
                tourname={t("audiobook")}
              />
              <Cards scheme="desc-card" tourname={t("audiobook")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
