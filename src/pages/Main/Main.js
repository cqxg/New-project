import React from "react";
import { useTranslation } from "react-i18next";
import constructor from "../../constructors/constructor";

import FirstBlock from "./Blocs/FirstBlock";
import SecondBlock from "./Blocs/SecondBlock";
import Features from "../../components/Features/Features";

import "./Main.scss";
import BubblesWithImages from "../../components/BubblesWithImages/BubblesWithImages";
import WithIconBlock from "./Blocs/WithIconBlock";
import SixBlock from "./Blocs/SixBlock";

const Main = () => {
  const { t } = useTranslation();
  const pageConstructor = constructor.main;

  return (
    <>
      <FirstBlock t={t} />
      <SecondBlock t={t} />
      <Features constructor={pageConstructor} scheme="features" />
      <BubblesWithImages constructor={pageConstructor} scheme="whatYouGet" />
      <WithIconBlock t={t} />
      <SixBlock t={t} />
    </>
  );
};

export default Main;
