import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Routes } from './routes/routes';
import { Blob } from './components/Blob/Blob';
import Cookies from './components/Cookies/Cookies';
import Menu from './components/Menu/Menu';
import Preloader from './components/Preloader/Preloader';

import './App.css';
import { bubbleTexture } from "./components/Bubbles/bubbleTexture";

const App = (props) => {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie] = useCookies(["user"]);
  const [activeLocale, setActiveLocale] = useState("en");
  const [toggleCookie, setToggleCookie] = useState(true);

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
    }, 1);
  }, []);


  // document.addEventListener('wheel', function(e){
  //   document.querySelectorAll('.bg__bubbles').forEach((item) => {
  //     if (e.deltaY > 0) {
  //       item.style.animation = 'translateBubbleonScrollToBottom 30s ease-in-out'
  //     } else if(e.deltaY < 0) {
  //       item.style.animation = 'translateBubbleonScrollToTop 30s ease-in-out'
  //     }
  //   })
  // })

  const renderBackGroundBubbles = () => {
    const coordinates = []
    const maxNum = 10;
    const pageHeight = document.querySelector('.switch-wrapper div:first-child')?.offsetHeight
    const max = pageHeight , min = document.documentElement.clientHeight
    console.log(pageHeight)
    for (let i = 0; i < maxNum; i++) {
      coordinates.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return (
      <>
        {coordinates.map((num) => {
          return (
              <div style={{animation: 'translateBubbleonScrollToTop 30s infinite ease-in-out', zIndex: 2, position: 'absolute', left: `${Math.floor(Math.random() * 75 + 5)}%`, top: `${num}px`}} className="animate__animated bg__bubbles">
                <Blob
                  size={`${Math.floor(Math.random() * 25 + 5)}vh`}
                  style={{backgroundColor: '#eee',}}
                  animationDuration="25s"
                >
                  {bubbleTexture()}
                </Blob>
              </div>
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
