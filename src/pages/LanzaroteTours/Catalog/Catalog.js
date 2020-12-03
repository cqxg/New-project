import React from "react";
import { useTranslation } from "react-i18next";

import BreadCrumbs from "../../../components/BreadCrumbs/BreadCrumbs";
import bubbleGroup from "../../../components/Bubbles/BubbleGroup";

import grand from "../../../img/images/Lanzarote/mainslider/grand.png";
import north from "../../../img/images/Lanzarote/mainslider/north.png";
import south from "../../../img/images/Lanzarote/mainslider/south.png";
import womanwire from "../../../img/images/Lanzarote/mainslider/womanwire.svg";

import homeimg from "../../../img/images/Lanzarote/mainslider/homeimg.svg";
import car from "../../../img/images/Lanzarote/mainslider/car.svg";
import dot from "../../../img/images/Lanzarote/mainslider/dot.svg";

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

              <div className="card__desc">
                <div className="card__desc--wrapper">
                  <div className="card__desc-title-wrapper">
                    <h3>{t("grandTour")}</h3>
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
            </div>

            <div className="card-wrapper">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${north})` }}
              >
                <img className="car" src={car} alt="car" />
                <h3>{t("northTour")}</h3>
                <h2>{t("lanzarote")}</h2>
                <button>{t("more")}</button>
              </div>

              <div className="card__desc">
                <div className="card__desc--wrapper">
                  <div className="card__desc-title-wrapper">
                    <h3>{t("northTour")}</h3>
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
            </div>

            <div className="card-wrapper">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${south})` }}
              >
                <img className="car" src={car} alt="car" />
                <h3>{t("southTour")}</h3>
                <h2>{t("lanzarote")}</h2>
                <button>{t("more")}</button>
              </div>

              <div className="card__desc">
                <div className="card__desc--wrapper">
                  <div className="card__desc-title-wrapper">
                    <h3>{t("southTour")}</h3>
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
            </div>
          </div>
        </div>

        <div className="lanzarote-audiobook">
          <h1 className="lanzarote-audiobook__title">
            {t("lanzaroteAudiobook")}
          </h1>
          <div className="lanzarote-tours__cards">
            <div className="card-wrapper">
              <div
                className="card__img"
                style={{ backgroundImage: `url(${womanwire})` }}
              >
                <img className="car" src={homeimg} alt="car" />
                <h3>{t("audiobook")}</h3>
                <h2>{t("lanzarote")}</h2>
                <button>{t("more")}</button>
              </div>

              <div className="card__desc">
                <div className="card__desc--wrapper">
                  <div className="card__desc-title-wrapper">
                    <h3>{t("audiobook")}</h3>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
