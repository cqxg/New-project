import React from "react";

import { useTranslation } from "react-i18next";
import Wave from "react-wavify";
import Button from "../Buttons/Button";

import appStore from "../../img/images/appstore.svg";
import googleplay from "../../img/images/googleplay.svg";
import facebook from "../../img/svg/facebook.svg";
import twitter from "../../img/svg/twitter.svg";
import google from "../../img/svg/google.svg";

import "./Footer.scss";

const Footer = (props) => {
  const { t } = useTranslation();
  return (
    <div className="section__margin">
      <Wave
        fill="#D1F1FD"
        paused={false}
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.35,
          points: 3,
        }}
      />
      <div className="footer">
        <div className="footer__container">
          <div className="footer__left">
            <h3>Lanzarote</h3>
            <ul>
              <li>{t("grandTour")}</li>
              <li>{t("northTour")}</li>
              <li>{t("southTour")}</li>
              <li>{t("audiobook")}</li>
            </ul>
          </div>
          <div className="footer__center">
            <h3>Site map</h3>
            <ul>
              <li>{t("about")}</li>
              <li>{t("aboutUs")}</li>
              <li>{t("faq")}</li>
              <li>{t("contacts")}</li>
            </ul>
          </div>
          <div className="footer__right">
            <div className="footer__right-social">
              <img src={appStore} alt="appstore" />
              <img src={googleplay} alt="googleplay" />
            </div>
            <div className="footer__right-share">
              <p>Share with friends</p>
              <div className="footer__right-sharebuttons">
                <Button type="empty" icon={facebook} />
                <Button type="empty" icon={twitter} />
                <Button type="empty" icon={google} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
