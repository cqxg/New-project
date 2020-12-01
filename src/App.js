import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Routes } from './routes/routes';
import Cookies from './components/Cookies/Cookies';
import Menu from './components/Menu/Menu';
import Preloader from './components/Preloader/Preloader';

import './App.css';
import SvgBlobs from "./utils/svgBlobs/SvgBlobs";
import { Parallax } from "react-scroll-parallax";
import { useController } from 'react-scroll-parallax';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["user"]);
  const [activeLocale, setActiveLocale] = useState("en");
  const [toggleCookie, setToggleCookie] = useState(true);
  const { parallaxController } = useController();

  const changeLocale = (e) => setActiveLocale(e);

  const handleCookies = () => {
    setCookie("user", "gowtham", {
      path: "/",
    });
    setToggleCookie(false);
  };

  const locationRoute = props.location.pathname;
  document.body.scrollIntoView({
    behavior: 'auto',
  });

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
      document.getElementsByTagName('body')[0].classList.add('loaded')
      document.querySelectorAll('.custom-class').forEach((item) => {
      item.style.left = `${Math.floor(Math.random() * 75 + 5)}%`
      item.style.top = `${Math.floor(Math.random() * 6000 + 500)}px`
      })
    }, 4000);
  }, [locationRoute]);

  const renderBackGroundBubbles = () => {
    const coordinates = []
    const maxNum = 12;
    const pageHeight = document.querySelector('.switch-wrapper div:first-child')?.offsetHeight
    const max = pageHeight, min = document.documentElement.clientHeight
    for (let i = 0; i < maxNum; i++) {
      coordinates.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    parallaxController.update()

    return (
      <>
        {coordinates.map((num, index) => {
          return (
            <Parallax key={index} y={[100, -100]} className="custom-class" tagOuter="figure">
            <div key={index} className="animate__animated bg__bubbles">
              <SvgBlobs width={`${Math.floor(Math.random() * 150 + 75)}`} index={index} />
            </div>
            </Parallax>
          )
        })}
      </>
    )
  }

  return (
    <>
      {loading ? <Preloader /> : null}
      <Menu
        changeLocale={changeLocale}
        activeLocale={activeLocale}
        theme={locationRoute === "/about" ? "light" : "dark"}
      />
        <Routes />
        {renderBackGroundBubbles()}

      {toggleCookie && !cookies.user ? <Cookies cookies={cookies} handleCookies={handleCookies} /> : null}
    </>
  );
};

export default withRouter(App);
