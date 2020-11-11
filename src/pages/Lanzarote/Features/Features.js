import React from "react";
import parse from "html-react-parser";

import { Blob } from "react-blob";
import { useTranslation } from "react-i18next";
import Wave from "react-wavify";

import "./Features.scss";

const Features = (props) => {
  const { scheme, constructor } = props;
  const featureConstructor = constructor[scheme];
  const { t } = useTranslation();

  const renderBubbles = () => {
    return featureConstructor.bubbles.map((item) => {
      return (
        <div className="features__item">
          <Blob
            size="195px"
            style={{
              backgroundColor: "#fff",
            }}
            animationDuration="15s"
          >
            <img src={item.icon} alt={item.text} />
          </Blob>
          <p>{t(item.text)}</p>
        </div>
      );
    });
  };

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
          <h1>{t(featureConstructor.title)}</h1>
          {featureConstructor.subTitle ? (
            <p className="subTitle">{parse(t(featureConstructor.subTitle))}</p>
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
