import React, { useState, useEffect, useRef } from "react";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Routes } from './routes/routes';
import { Blob } from './components/Blob/Blob';
import Cookies from './components/Cookies/Cookies';
import Menu from './components/Menu/Menu';
import Preloader from './components/Preloader/Preloader';

import './App.css';
import { bubbleTexture } from "./components/Bubbles/bubbleTexture";
import SvgBlobs from "./utils/svgBlobs/SvgBlobs";
import { morphingSvgBlobs } from "./utils/svgBlobs/morphingSvgBlobs";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import { useController } from 'react-scroll-parallax';

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["user"]);
  const [activeLocale, setActiveLocale] = useState("en");
  const [toggleCookie, setToggleCookie] = useState(true);
  const ref = useRef(null)
  const { parallaxController } = useController();

  const changeLocale = (e) => setActiveLocale(e);

  const handleCookies = () => {
    setCookie("user", "gowtham", {
      path: "/",
    });
    setToggleCookie(false);
  };

  const locationRoute = props.location.pathname;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      document.getElementsByTagName('body')[0].classList.add('loaded')
      document.querySelectorAll('.custom-class').forEach((item) => {
      item.style.left = `${Math.floor(Math.random() * 75 + 5)}%`
      item.style.top = `${Math.floor(Math.random() * 6000 + 500)}px`
      })
    }, 1);
  }, []);

  const renderBackGroundBubbles = () => {
    const coordinates = []
    const maxNum = 10;
    const pageHeight = document.querySelector('.switch-wrapper div:first-child')?.offsetHeight
    const max = pageHeight, min = document.documentElement.clientHeight
    for (let i = 0; i < maxNum; i++) {
      coordinates.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    parallaxController.update()

    return (
      <>
        {coordinates.map((num, index) => {
          console.log(ref)
          return (
            <Parallax y={[200, -200]} className="custom-class" tagOuter="figure">
              <div key={index} className="animate__animated bg__bubbles">
                <SvgBlobs width={`${Math.floor(Math.random() * 300 + 75)}`} index={index} />
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
