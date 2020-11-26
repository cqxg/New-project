import React, { useRef, useEffect } from "react";

import a from "../../img/icon/a.png";
import b from "../../img/icon/b.png";
import c from "../../img/icon/c.png";
import d from "../../img/icon/d.png";
import e from "../../img/icon/e.png";
import f from "../../img/icon/f.png";
import g from "../../img/icon/g.png";
import k from "../../img/icon/k.png";
import l from "../../img/icon/l.png";
import m from "../../img/icon/m.png";
import n from "../../img/icon/n.png";
import o from "../../img/icon/o.png";
import p from "../../img/icon/p.png";

import "./Cubes.scss";

const Cubes = () => {
  const target = useRef(null);

  const goSpin = () => {
    document.querySelectorAll(".stage").forEach((item, index) => {
      const spinner = item.children[0];
      if (spinner.classList[0] === "cubespinner4") {
        spinner.style.animation = "spincubeDown 0.8s ease-in-out";
      } else if (spinner.classList[0] === "cubespinner5") {
        spinner.style.animation = "spincubeUp 0.5s ease-in-out";
      } else if (
        spinner.classList[0] === "cubespinner1" ||
        spinner.classList[0] === "cubespinner2" ||
        spinner.classList[0] === "cubespinner3"
      ) {
        spinner.style.animation = "spincubeRight 0.8s ease-in-out";
      } else if (
        spinner.classList[0] === "cubespinner8" ||
        spinner.classList[0] === "cubespinner6" ||
        spinner.classList[0] === "cubespinner7"
      ) {
        spinner.style.animation = "spincubeLeft 0.8s ease-in-out";
      }
      if (index === 0) {
        spinner.style.animationDelay = "0.3s";
      } else if (index === 1) {
        spinner.style.animationDelay = "1.1s";
      } else if (index === 2) {
        spinner.style.animationDelay = "1.9s";
      } else if (index === 3) {
        spinner.style.animationDelay = "2.7s";
      } else if (index === 4) {
        spinner.style.animationDelay = "5.9s";
      } else if (index === 5) {
        spinner.style.animationDelay = "5.1s";
      } else if (index === 6) {
        spinner.style.animationDelay = "4.3s";
      } else if (index === 7) {
        spinner.style.animationDelay = "3.5s";
      }
    });
  };

  goSpin();

  setInterval(() => {
    target.current.style.animation = "";
    document.querySelectorAll(".stage").forEach((item) => {
      const spinner = item.children[0];
      spinner.style.animation = "";
      spinner.style.animationDelay = "";
    });
  }, 7000);

  setInterval(() => {
    goSpin();
  }, 7005);

  return (
    <>
      <div className="first-line">
        <div className="stage">
          <div ref={target} className="cubespinner1">
            <div
              className="face1"
              style={{ backgroundImage: `url(${a})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${a})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${a})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${a})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${a})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${a})` }}
            ></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner2">
            <div
              className="face1"
              style={{ backgroundImage: `url(${b})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${b})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${b})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${b})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${b})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${b})` }}
            ></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner3">
            <div
              className="face1"
              style={{ backgroundImage: `url(${c})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${c})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${c})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${c})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${c})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${c})` }}
            ></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner4">
            <div
              className="face1"
              style={{ backgroundImage: `url(${d})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${d})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${d})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${d})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${d})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${d})` }}
            ></div>
          </div>
        </div>
      </div>
      <div className="second-line">
        <div className="stage">
          <div className="cubespinner5">
            <div
              className="face1"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${e})` }}
            ></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner6">
            <div
              className="face1"
              style={{ backgroundImage: `url(${f})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${f})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${f})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${f})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${f})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${f})` }}
            ></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner7">
            <div
              className="face1"
              style={{ backgroundImage: `url(${g})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${g})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${g})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${g})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${g})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${g})` }}
            ></div>
          </div>
        </div>

        <div className="stage">
          <div className="cubespinner8">
            <div
              className="face1"
              style={{ backgroundImage: `url(${k})` }}
            ></div>
            <div
              className="face2"
              style={{ backgroundImage: `url(${k})` }}
            ></div>
            <div
              className="face3"
              style={{ backgroundImage: `url(${k})` }}
            ></div>
            <div
              className="face4"
              style={{ backgroundImage: `url(${k})` }}
            ></div>
            <div
              className="face5"
              style={{ backgroundImage: `url(${k})` }}
            ></div>
            <div
              className="face6"
              style={{ backgroundImage: `url(${k})` }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cubes;
