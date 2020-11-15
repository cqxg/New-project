import React from "react";
import parse from "html-react-parser";

import { useTranslation } from "react-i18next";

import bubbleForSecondBlocs from "../../../components/Bubbles/BubbleForSecondBlocs";

import "./About.scss";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      {bubbleForSecondBlocs()}
      <div className="container">
        <h1>{t("aboutLanzaroteIsland")}</h1>
        <div className="about__flex">
          <div className="about__left">
            <p>{parse(t("LanzaroteAboutLeftBlock"))}</p>
          </div>
          <div className="about__right">
            <p>{parse(t("LanzaroteAboutRightBlock"))}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
