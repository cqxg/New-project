import React from "react";
import { useTranslation } from "react-i18next";

import Cards from "../../../components/Cards/Cards";
import { Blob } from "../../../components/Blob/Blob";
import Footer from "../../../components/Footer/Footer";
import bubbleGroup from "../../../components/Bubbles/BubbleGroup";
import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import RenderBackgroundBubbles from "../../../components/RenderBgBubbles";

import car from "../../../img/images/Lanzarote/mainslider/car.svg";
import dot from "../../../img/images/Lanzarote/mainslider/dot.svg";
import grand from "../../../img/images/Lanzarote/mainslider/grand.png";
import north from "../../../img/images/Lanzarote/mainslider/north.png";
import south from "../../../img/images/Lanzarote/mainslider/south.png";
import badge from "../../../img/images/Lanzarote/mainslider/badge.svg";
import homeimg from "../../../img/images/Lanzarote/mainslider/homeimg.svg";
import womanwire from "../../../img/images/Lanzarote/mainslider/womanwire.svg";

import "./Catalog.scss";

const renderBubbles = () => (
  <Blob
    size="45vh"
    style={{ zIndex: -1, backgroundColor: "#D5EFFB" }}
    animationDuration="25s"
  />
);

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

        <div className="lanzarote-allfunctions">
          <div className="lanzarote-allfunctions__left">
            <div className="lanzarote-allfunctions__title">
              <h1>{t("allfunctions")}</h1>
              <h1>7,95€</h1>
            </div>
            <div className="lanzarote-allfunctions__subtitle">
              <div className="lanzarote-allfunctions__dots">
                <img alt="dot" src={dot} />
                <p>{t("allExcursions")}</p>
                <img alt="dot" src={dot} />
                <p>{t("audiobook")}</p>
              </div>
              <img alt="badge" src={badge} />
            </div>
            <div className="lanzarote-allfunctions__desc">
              <p>{t("purchase")}</p>
              <p>{t("offlineUse")}</p>
              <p>{t("connection")}</p>
            </div>
          </div>
          <div className="lanzarote-allfunctions__right">{renderBubbles()}</div>
        </div>

        <div className="lanzarote-test">
          <h1>{t("test")}</h1>
          <p>{t("testP1")}</p>
          <p>{t("testP2")}</p>
          <p>{t("testP3")}</p>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Catalog;
