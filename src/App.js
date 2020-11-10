import React, { useState, useEffect } from "react";
import { BrowserRouter, withRouter } from "react-router-dom";
import { useCookies } from 'react-cookie';

import { Routes } from "./routes/routes";
import Cookies from './components/Cookies/Cookies'
import Menu from "./components/Menu/Menu";
import Preloader from "./components/Preloader/Preloader";

import "./App.css";

const App = props => {
  const [cookies, setCookie] = useCookies(['user']);
  const [toggleCookie, setToggleCookie] = useState(true)
  const [loading, setLoading] = useState(true);

  const handleCookies = () => {
    setCookie("user", "gowtham", {
      path: "/"
    });
    setToggleCookie(false)
  }

  const locationRoute = props.location.pathname

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
    <>
      {!loading ? (
        <>
          <Menu theme={locationRoute === '/about' ? 'light' : 'dark'}/>
          <Routes />
          {toggleCookie && !cookies.user ? <Cookies cookies={cookies} handleCookies={handleCookies} /> : null}
        </>
      ) : <Preloader />}
    </>
  );
};

export default withRouter(App);
