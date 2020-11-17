import React from "react";

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
            {/* <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${a})` }}
            /> */}
            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${a})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${a})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${a})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${a})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${a})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${a})` }}>6</div>
              </div>
            </div>

            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${b})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${b})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${b})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${b})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${b})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${b})` }}>6</div>
              </div>
            </div>

            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${c})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${c})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${c})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${c})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${c})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${c})` }}>6</div>
              </div>
            </div>

            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${d})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${d})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${d})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${d})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${d})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${d})` }}>6</div>
              </div>
            </div>


            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${e})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${e})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${e})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${e})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${e})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${e})` }}>6</div>
              </div>
            </div>

            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${f})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${f})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${f})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${f})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${f})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${f})` }}>6</div>
              </div>
            </div>

            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${g})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${g})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${g})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${g})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${g})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${g})` }}>6</div>
              </div>
            </div>

            <div className="stage" style={{ width: "120px", height: "120px" }}>
              <div className="cubespinner">
                <div className="face1"  style={{ backgroundImage: `url(${k})` }}>1</div>
                <div className="face2"  style={{ backgroundImage: `url(${k})` }}>2</div>
                <div className="face3"  style={{ backgroundImage: `url(${k})` }}>3</div>
                <div className="face4"  style={{ backgroundImage: `url(${k})` }}>4</div>
                <div className="face5"  style={{ backgroundImage: `url(${k})` }}>5</div>
                <div className="face6"  style={{ backgroundImage: `url(${k})` }}>6</div>
              </div>
            </div> 

            {/* <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${b})` }}
            />
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${c})` }}
            />
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${d})` }}
            />
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${e})` }}
            />
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${f})` }}
            />
            <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${g})` }}
            />
           <div
              className="withicon_block__icon"
              style={{ backgroundImage: `url(${k})` }}
            />  */}
            <div className="withicon_block__muchicon">
              <div
                className="withicon_block__muchiconinside"
                style={{ backgroundImage: `url(${l})` }}
              />
              <div
                className="withicon_block__muchiconinside"
                style={{ backgroundImage: `url(${m})` }}
              />
              <div
                className="withicon_block__muchiconinside"
                style={{ backgroundImage: `url(${n})` }}
              />
              <div
                className="withicon_block__muchiconinside"
                style={{ backgroundImage: `url(${o})` }}
              />
              <div
                className="withicon_block__muchiconinside"
                style={{ backgroundImage: `url(${p})` }}
              /> 
             </div> 
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default WithIconBlock;
