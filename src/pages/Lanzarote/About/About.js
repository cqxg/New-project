import React from 'react';
import parse from 'html-react-parser';

import { useTranslation } from 'react-i18next';

import bubbleForSecondBlocs from '../../../components/Bubbles/BubbleForSecondBlocs';

import './About.scss';

const About = ({aboutTitle, aboutLeftText, aboutRightText}) => {
  const { t } = useTranslation();

  return (
    <div className="about">
      {bubbleForSecondBlocs()}
      <div className="container">
        <h1>{aboutTitle || t('about')}</h1>
          <div className="about__flex animate__animated">
            <div className="about__left">
              <p>{aboutLeftText || parse(t('LanzaroteAboutLeftBlock'))}</p>
            </div>
            <div className="about__right">
              <p>{aboutRightText || parse(t('LanzaroteAboutRightBlock'))}</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
