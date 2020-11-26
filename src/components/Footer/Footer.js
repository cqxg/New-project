import React, { useState, useRef, useEffect } from "react";

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
import { FooterAnimate } from "./FooterAnimate";
import { attribute } from "./AttributeSvg";

const Footer = (props) => {
  const { t } = useTranslation();
  const [state, setState] = useState(true)
  const [zIndex, setIndex] = useState(false)
  const target = useRef(null)

  const changeIndex = e => setIndex(e)

  const onMouseEvent = (event) => {
    setState(!state)
    FooterAnimate(state, changeIndex)
  }
  console.log(zIndex)

  if (!state) document.body.style.background = '#D5EFFB';
  else document.body.style.background = '#fff';

  return (
    <>
      {/* <svg style={{visibility: zIndex ? "hidden" : "visible"}} className="footer__svg" width="1920" viewBox="0 0 1920" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
          <path ref={target} id="morphing" d="M0.000152588 0.000110626V1080H1920V0.000110626H0.000152588ZM1920 415C1920 610 1976.69 1018.83 1920 1080C1871 1132.86 1628 1127 1542.5 1120.5C1457 1114 1111 1156 945 1147.5C779 1139 200.5 1272.26 89.5 1205.5C10.5 1157.97 0.000152588 1112 -28.4999 929.5C-57 747 5.34058e-05 666 -28.5001 525C-57.0002 384 -188.5 8.36 -28.4999 -13C115.7 -32.25 794.23 9.64021 945 -12.9998C1076.73 -32.7898 1844.4 -84.1498 1920 -24.9998C2012.42 47.3202 1920 242.5 1920 415Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
        </defs>
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
          <p onMouseOut={onMouseEvent} onMouseEnter={onMouseEvent}>LINK</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
