import React from "react";

import Button from "../../../components/Buttons/Button";
import bubbleGroup from "../../../components/BubbleGroup/BubbleGroup";
import a from "../../../img/icon/a.png";
import b from "../../../img/icon/b.png";
import c from "../../../img/icon/c.png";
import d from "../../../img/icon/d.png";
import e from "../../../img/icon/e.png";
import f from "../../../img/icon/f.png";
import g from "../../../img/icon/g.png";
import k from "../../../img/icon/k.png";
import l from "../../../img/icon/l.png";
import m from "../../../img/icon/m.png";
import n from "../../../img/icon/n.png";
import o from "../../../img/icon/o.png";
import p from "../../../img/icon/p.png";

const WithIconBlock = ({ t }) => (
  <div className="withicon_block">
    <div className="container">
      <div className="withicon_block__flex">
        <div className="withicon_block__left">
          <h1>{t("vidodoKnowsIslandTitle")}</h1>
          <p className="withicon_block__desc">{t("vidodoKnowsIslandDesc")}</p>
          <Button type="revert" text={t("moreDetailBtn")} />
        </div>
        <div className="withicon_block__right">
          {bubbleGroup()}
          <div className="withicon_block__iconblock">
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${a})` }}
            ></div>
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${b})` }}
            ></div>
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${c})` }}
            ></div>
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${d})` }}
            ></div>
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${f})` }}
            ></div>
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${g})` }}
            ></div>
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${k})` }}
            ></div>
            <div className="withicon_block__muchicon">
              <div className="withicon_block__muchiconinside" style={{ backgroundImage: `url(${l})` }}></div>
              <div className="withicon_block__muchiconinside" style={{ backgroundImage: `url(${m})` }}></div>
              <div className="withicon_block__muchiconinside" style={{ backgroundImage: `url(${n})` }}></div>
              <div className="withicon_block__muchiconinside" style={{ backgroundImage: `url(${o})` }}></div>
              <div className="withicon_block__muchiconinside" style={{ backgroundImage: `url(${p})` }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WithIconBlock;
