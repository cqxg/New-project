import React, { useState, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import { Routes } from "./routes/routes";
import Menu from "./components/Menu/Menu";
import Preloader from "./components/Preloader/Preloader";

import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);

  return (
      <BrowserRouter>
        {!loading ? (
          <>
            <Menu />
            <Routes />
          </>
        ) : <Preloader/>}
      </BrowserRouter>
  );
};

export default App;
