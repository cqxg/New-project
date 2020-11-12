import React from "react";
import { Blob } from "../../../components/Blob/Blob";

import Button from "../../../components/Buttons/Button";
import bubbleSixBlock from "../../../components/BubbleSixBlock/BubbleSixBlock";

import appStoreIcon from "../../../img/svg/appStore.svg";
import googlePlay from "../../../img/svg/googlePlay.svg";

const EightBlock = ({ t }) => (
  <div className="eight_block">
    <div className="container">
      <div className="eight_block__flex">
        <div className="eight_block__left">{bubbleSixBlock()}</div>
        <div className="eight_block__right">
          <h1>{t("installTheVidodo")}</h1>
          <p>{t("mainFirstBlocSubtitle")}</p>
          <div className="eight_block__buttons">
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
          <div className="eight_block__qr">
            <span className="eight_block__qr-desc">
              {t("mainFirstBlockQr")}
            </span>
            <div className="eight_block__img"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default EightBlock;