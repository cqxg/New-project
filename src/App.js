import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

import { Routes } from "./routes/routes";
import Menu from "./components/Menu/Menu";
import Cookies from "./components/Cookies/Cookies";
import Preloader from "./components/Preloader/Preloader";

import "./App.css";

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
  document.body.scrollIntoView({
    behavior: "auto",
  });

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      document.getElementsByTagName("body")[0].classList.add("loaded");
      document.querySelectorAll(".custom-class").forEach((item) => {
        item.style.left = `${Math.floor(Math.random() * 75 + 5)}%`;
        item.style.top = `${Math.floor(Math.random() * 90 + 10)}%`;
      });
    }, 2);
  }, [locationRoute]);

  return (
    <>
      {loading ? <Preloader /> : null}
      <Menu
        changeLocale={changeLocale}
        activeLocale={activeLocale}
        theme={locationRoute === "/about" ? "light" : "dark"}
      />
      <Routes/>

      {toggleCookie && !cookies.user ? (
        <Cookies cookies={cookies} handleCookies={handleCookies} />
      ) : null}
    </>
  );
};

export default withRouter(App);
