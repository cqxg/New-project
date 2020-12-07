import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import parse from 'html-react-parser';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

import Wave from 'react-wavify';

import './Header.scss';
import constructor from '../../../constructors/constructor';
import Slider from 'react-slick';

const Header = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const [smallWindow, setSmallWindow] = useState(false)

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    centerMode: true,
  };

  useEffect(() => {
    if (window.innerWidth < 600) setSmallWindow(true)
    else setSmallWindow(false)
  }, [])

  window.addEventListener('resize', (event) => {
    if (window.innerWidth < 600) setSmallWindow(true)
    else setSmallWindow(false)
  })

  const renderSlickHeader = () => (
    <Slider {...settings}>
        {
          constructor.lanzarote.headerTours.map((item) => (
            <Flippy flipOnHover flipDirection="horizontal" ref={ref}>
              <FrontSide style={{ boxShadow: 'none', padding: 0 }}>
                <div className={`header__container-tour ${item.className}`}>{item.frontText}</div>
              </FrontSide>
              <BackSide style={{ boxShadow: 'none', padding: 0 }}>
                <div className="header__container-tour">{item.backText}</div>
              </BackSide>
            </Flippy>
          ))
        }
      </Slider>
  )

  return (
    <div className="header">
      <div className="header__container">
        <div className="header__container-title">
          <h1 className="animate__animated">
            {parse(t('LanzaroteTitle'))}
          </h1>
        </div>
          <div className="header__container-tours">
            {
              smallWindow ? renderSlickHeader() :
              constructor.lanzarote.headerTours.map((item) => (
                <Flippy flipOnHover flipDirection="horizontal" ref={ref}>
                  <FrontSide style={{ boxShadow: 'none', padding: 0 }}>
                    <div className={`header__container-tour ${item.className}`}>{item.frontText}</div>
                  </FrontSide>
                  <BackSide style={{ boxShadow: 'none', padding: 0 }}>
                    <div className="header__container-tour">{item.backText}</div>
                  </BackSide>
                </Flippy>
              ))
            }
          </div>
      </div>
      <div className="header__wave">
        <Wave
          fill="#fff"
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

export default Header;
