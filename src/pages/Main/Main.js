import React from "react";
import { useTranslation } from "react-i18next";

import FirstBlock from "./Blocs/FirstBlock";
import SecondBlock from "./Blocs/SecondBlock";
import ThitdBlock from "./Blocs/ThitdBlock";

import "./Main.scss";

const Main = () => {
  const { t } = useTranslation();
  return (
    <>
      <FirstBlock t={t} />
      <SecondBlock t={t} />
      <ThitdBlock t={t} />
    </>
  );
};

export default Main;
