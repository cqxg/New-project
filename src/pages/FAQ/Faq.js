import React from "react";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";
import Accordeon from "../../components/Accordeon/Accordeon";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

import "./Faq.scss";
import Button from "../../components/Buttons/Button";

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
              <Accordeon
                accordionTitle={t("accordionTitle1")}
                accordionText={t("accordionText1")}
                number="1"
              />
              <Accordeon
                accordionTitle={t("accordionTitle2")}
                accordionText={t("accordionText2")}
                number="2"
              />
              <Accordeon
                accordionTitle={t("accordionTitle3")}
                accordionText={t("accordionText3")}
                number="3"
              />
            </div>
            <div className="faq__right">
              <Accordeon
                accordionTitle={t("accordionTitle4")}
                accordionText={t("accordionText4")}
                number="4"
              />
              <Accordeon
                accordionTitle={t("accordionTitle5")}
                accordionText={t("accordionText5")}
                number="5"
              />
              <Accordeon
                accordionTitle={t("accordionTitle6")}
                accordionText={t("accordionText6")}
                number="6"
              />
            </div>
          </div>

          <div className="faq__form">
            <h1>{t("asks")}</h1>
            <p>{t("asksDesc")}</p>
            <div className="faq__inputs">
              <input placeholder={t("mailOrPhone")} />
              <input placeholder={t("question")} />
              <Button type="secondary" text={t("send")} />
            </div>
            <p className="submit-desc">{t("submitDesc")}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Faq;
