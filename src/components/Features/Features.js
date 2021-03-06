import React from 'react';
import parse from 'html-react-parser';

import { useTranslation } from 'react-i18next';
import Wave from 'react-wavify';
import { Blob } from '../Blob/Blob';

import './Features.scss';

const Features = (props) => {
  const { scheme, constructor } = props;
  const featureConstructor = constructor[scheme];
  const { t } = useTranslation();

  const renderBubbles = () => featureConstructor.bubbles.map((item, index) => (
      <div key={index} className="features__item animate__animated">
        <Blob
          size="195px"
          style={{
            backgroundColor: '#fff',
          }}
          animationDuration="0s"
        >
          <img src={item.icon} alt={item.text} />
        </Blob>
        <p>{t(item.text)}</p>
      </div>
  ));

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
      <div className="features">
        <div className="container">
            <h1 className="animate__animated">{t(featureConstructor.title)}</h1>
            {featureConstructor.subTitle ? (
              <p className="subTitle animate__animated">{parse(t(featureConstructor.subTitle))}</p>
            ) : null}
          <div className="features__items">{renderBubbles()}</div>
        </div>
      </div>
      <div className="rotate__wave">
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
      </div>
    </div>
  );
};

export default Features;
