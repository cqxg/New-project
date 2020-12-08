import React from "react";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";
import Accordeon from "../../components/Accordeon/Accordeon";
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
            <div className="faq__left">
              <Accordeon number="1" />
              <Accordeon number="2" />
              <Accordeon number="3" />
            </div>
            <div className="faq__right">
              <Accordeon number="4" />
              <Accordeon number="5" />
              <Accordeon number="6" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
