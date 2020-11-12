import React from "react";

import bubbleSixBlock from "../../../components/BubbleSixBlock/BubbleSixBlock";

const SixBlock = ({ t }) => (
  <div className="six_block">
    <div className="container">
      <div className="six_block__flex">
        <div className="six_block__left">{bubbleSixBlock()}</div>
        <div className="six_block__right">
            <h1>{t("eventsSpecialOferTitle")}</h1>
            <p>{t("eventsSpecialOferDesk")}</p>
        </div>
      </div>
    </div>
  </div>
);

export default SixBlock;
