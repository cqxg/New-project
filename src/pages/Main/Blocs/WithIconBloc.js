import React from "react";

import Button from "../../../components/Buttons/Button";

const WithIconBlock = ({ t }) => (
  <div className="withicon_block">
    <div className="container">
      <div className="withicon_block__flex">
        <div className="withicon_block__left">
          <h1>{t("vidodoKnowsIslandTitle")}</h1>
          <p className="withicon_block__desc">{t("vidodoKnowsIslandDesc")}</p>
          <Button type="revert" text={t("moreDetailBtn")} />
        </div>
        <div className="withicon_block__right"></div>
      </div>
    </div>
  </div>
);

export default WithIconBlock;
