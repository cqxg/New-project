import React from "react";
import { Blob } from "../../../components/Blob/Blob";

import Button from "../../../components/Buttons/Button";

import appStoreIcon from "../../../img/svg/appStore.svg";
import googlePlay from "../../../img/svg/googlePlay.svg";

const renderBubbles = () => (
  <Blob
    size="55vh"
    style={{ zIndex: -1, backgroundColor: "#D5EFFB" }}
    animationDuration="25s"
  >
    <i className="fab fa-react"></i>
  </Blob>
);

const FirstBlock = ({ t }) => (
  <div className="first_block">
    <div className="container">
      <div className="first_block__flex">
        <div className="first_block__left">
          <h1>{t("mainFirstBlocTitle")}</h1>
          <p>{t("mainFirstBlocSubtitle")}</p>
          <div className="first_block__buttons">
            <Button
              icon={appStoreIcon}
              type="primary"
              text={t("appStoreBtn")}
            />
            <Button
              icon={googlePlay}
              type="success"
              text={t("googlePlayBtn")}
            />
          </div>
          <div className="first_block__qr">
            <span className="first_block__qr-desc">
              {t("mainFirstBlockQr")}
            </span>
            <div className="first_block__img"></div>
          </div>
        </div>
        <div className="first_block__right">{renderBubbles()}</div>
      </div>
    </div>
  </div>
);

export default FirstBlock;
