import React from 'react';
import parse from 'html-react-parser';

import Button from '../../../components/Buttons/Button';
import bubbleForSecondBlocs from '../../../components/Bubbles/BubbleForSecondBlocs';

import pathicon from '../../../img/images/group1.png';
import ReactWOW from 'react-wow';

const SecondBlock = ({ t }) => (
  <div className="second_block">
    {bubbleForSecondBlocs()}
    <div className="container">
      <ReactWOW animation='fadeInUp' delay='0.2s'>
        <div className="animate__animated second_block__title">
          <h1>{t('aboutVidodoGuide')}</h1>
          <Button icon={pathicon} type="rectangle" />
        </div>
      </ReactWOW>
      <ReactWOW animation='fadeInUp' delay='0.3s'>
        <div className="animate__animated second_block__flex">
          <div className="second_block__left">
            <p>{parse(t('secondBlockDescOne'))}</p>
          </div>
          <div className="second_block__right">
            <p>{parse(t('secondBlockDescTwo'))}</p>
          </div>
        </div>
      </ReactWOW>
    </div>
  </div>
);

export default SecondBlock;
