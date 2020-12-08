import React from "react";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

import "./Faq.scss";

const Faq = () => {
  const { t } = useTranslation();

  return (
    <>
      <BreadCrumbs scheme="faq" />
      <div className="container">
        <div className="faq">
          <h1>{t("faq")}</h1>
          <div className="faq__accordeons">
            <div className="faq__left"></div>
            <div className="faq__right"></div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
