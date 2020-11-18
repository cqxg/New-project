import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Routes } from './routes/routes';
import { Blob } from './components/Blob/Blob';
import Cookies from './components/Cookies/Cookies';
import Menu from './components/Menu/Menu';
import Preloader from './components/Preloader/Preloader';

import './App.css';
import ReactWOW from 'react-wow';

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

  const renderBackGroundBubbles = () => {
    const coordinates = []
    const maxNum = 5;
    const max = document.querySelector('.switch-wrapper div:first-child')?.offsetHeight, min = 1000
    for (let i = 0; i < maxNum; i++) {
      coordinates.push(Math.floor(Math.random() * (max - min + 1) + min))
    }
    return (
      <>
        {coordinates.map((num) => {
          return (
            <ReactWOW animation='fadeInUp' delay='0.2s'>
              <div style={{position: 'absolute', left: `${Math.floor(Math.random() * 100 + 1)}%`, top: `${num}px`}} className="animate__animated">
                <Blob
                  size={`${Math.floor(Math.random() * 25 + 1)}vh`}
                  style={{
                    zIndex: -1,
                    color: 'white',
                    fontSize: '80vh',
                    backgroundColor: '#D1F1FD',
                  }}
                  animationDuration="4s"
                >

                </Blob>
              </div>
            </ReactWOW>
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
