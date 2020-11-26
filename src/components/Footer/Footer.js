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
  const [zIndex, setIndex] = useState(true)
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
          <path ref={target} id="morphing" d="M49.3,-17.5C54.4,-0.3,42.5,20.8,26.4,31.3C10.4,41.7,-9.7,41.4,-26.7,30.5C-43.6,19.7,-57.4,-1.7,-52.5,-18.7C-47.5,-35.7,-23.7,-48.2,-0.8,-48C22.1,-47.7,44.2,-34.6,49.3,-17.5Z" fill="white" />
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
