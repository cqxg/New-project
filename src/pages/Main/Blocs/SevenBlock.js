import React from "react";

import bubbleSixBlock from "../../../components/BubbleSixBlock/BubbleSixBlock";
import Button from "../../../components/Buttons/Button";
import externallink from "../../../img/images/externallink.png";
import sevengirl from "../../../img/svg/sevengirl.svg";

const SevenBlock = ({ t }) => (
  <div className="seven_block">
    <div className="container">
      <div className="seven_block__flex">
        <div className="seven_block__left">
          <h1>{t("findBookTickets")}</h1>
          <Button
            type="secondary"
            iconRevert={externallink}
            text={t("takeLoockBtn")}
          />
        </div>
        <div className="seven_block__right">
          {bubbleSixBlock()}
          <img className='seven_block__girl' alt="seven block girl" src={sevengirl} />
        </div>
      </div>
    </div>
  </div>
);

export default SevenBlock;
