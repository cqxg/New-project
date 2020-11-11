import React from "react";
import { useTranslation } from "react-i18next";
import constructor from "../../constructors/constructor";

import FirstBlock from "./Blocs/FirstBlock";
import SecondBlock from "./Blocs/SecondBlock";
import Features from "../Lanzarote/Features/Features";

import "./Main.scss";


const Main = () => {
  const { t } = useTranslation();
  const pageConstructor = constructor.main

  return (
    <>
      <FirstBlock t={t} />
      <SecondBlock t={t} />
      <Features constructor={pageConstructor} scheme="features"/>
    </>
  );
};

export default Main;
