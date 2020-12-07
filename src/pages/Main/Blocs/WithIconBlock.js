import React from "react";
/* eslint-disable */
import Cubes from "../../../components/Cubes/Cubes";
import Button from "../../../components/Buttons/Button";
import bubbleGroup from "../../../components/Bubbles/BubbleGroup";
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
            <Cubes />
            <div className="withicon_block__muchicon">
              <img
                className="withicon_block__muchiconinside"
                src={l}
                alt="icon"
              />
              <img
                className="withicon_block__muchiconinside"
                src={m}
                alt="icon"
              />
              <img
                className="withicon_block__muchiconinside"
                src={n}
                alt="icon"
              />
              <img
                className="withicon_block__muchiconinside"
                src={o}
                alt="icon"
              />
              <img
                className="withicon_block__muchiconinside"
                src={p}
                alt="icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WithIconBlock;
