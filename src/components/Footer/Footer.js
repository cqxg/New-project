import React, {useState} from "react";

import { useTranslation } from "react-i18next";
import Wave from "react-wavify";
import Button from "../Buttons/Button";

import appStore from "../../img/images/appstore.svg";
import googleplay from "../../img/images/googleplay.svg";
import facebook from "../../img/svg/facebook.svg";
import twitter from "../../img/svg/twitter.svg";
import google from "../../img/svg/google.svg";
import fbblack from "../../img/svg/fbblack.svg";
import instblack from "../../img/svg/instblack.svg";

import "./Footer.scss";
import {FooterAnimate} from "./FooterAnimate";

const Footer = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState(false)
  console.log(state)

  // if (state) FooterAnimate()

  return (
    <>
      {/* <svg height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          id="morphing"
          fill="#FF0066"
          d="M56.1,-17.4C65.5,10.4,60.7,43.6,42.7,56C24.8,68.3,-6.2,59.8,-26.6,43.4C-47,26.9,-56.9,2.6,-50.7,-20.9C-44.5,-44.5,-22.2,-67.3,0.6,-67.5C23.4,-67.7,46.8,-45.3,56.1,-17.4Z"
          transform="translate(100 100)"
        />
      </svg> */}
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
              <div className="footer__right-join">
                <p>Join us</p>
                <div className="footer__right-sharebuttons">
                  <img src={fbblack} alt="" />
                  <img src={instblack} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom-wave">
          <Wave
            fill="#fff"
            paused={false}
            options={{
              height: 60,
              amplitude: 30,
              speed: 0.35,
              points: 3,
            }}
          />
          <p onMouseOut={() => setState(false)} onMouseEnter={() => setState(true)}>LINK</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
