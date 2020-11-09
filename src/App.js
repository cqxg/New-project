import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
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

  const locationRoute = window.location.href.split('/')[3]

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
      <BrowserRouter>
        {!loading ? (
          <>
            <Menu locationRoute={locationRoute}/>
            <Routes />
            {toggleCookie && !cookies.user ? <Cookies cookies={cookies} handleCookies={handleCookies}/> : null}
          </>
        ) : <Preloader/>}
      </BrowserRouter>
  );
};

export default App;
