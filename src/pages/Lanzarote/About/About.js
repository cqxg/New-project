import React from 'react';
import parse from 'html-react-parser';
import ReactWOW from 'react-wow'

import { useTranslation } from 'react-i18next';

import bubbleForSecondBlocs from '../../../components/Bubbles/BubbleForSecondBlocs';

import './About.scss';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="about">
      {bubbleForSecondBlocs()}
      <div className="container">
        <ReactWOW delay='0.2s' animation='fadeInUp'><h1 className="animate__animated">{t('aboutLanzaroteIsland')}</h1></ReactWOW>
        <ReactWOW delay='0.3s' animation='fadeInUp'>
          <div className="about__flex animate__animated">
            <div className="about__left">
              <p>{parse(t('LanzaroteAboutLeftBlock'))}</p>
            </div>
            <div className="about__right">
              <p>{parse(t('LanzaroteAboutRightBlock'))}</p>
            </div>
          </div>
        </ReactWOW>
      </div>
    </div>
  );
};

export default About;
