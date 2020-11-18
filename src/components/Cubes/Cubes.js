import React from "react";

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

import './Cubes.scss'

const Cubes = () => {
    return (
      <>
       <div className="stage" style={{ width: "120px", height: "120px" }}>
        <div className="cubespinner1">
          <div className="face1"  style={{ backgroundImage: `url(${a})` }}></div>
          <div className="face2"  style={{ backgroundImage: `url(${a})` }}></div>
          <div className="face3"  style={{ backgroundImage: `url(${a})` }}></div>
          <div className="face4"  style={{ backgroundImage: `url(${a})` }}></div>
          <div className="face5"  style={{ backgroundImage: `url(${a})` }}></div>
          <div className="face6"  style={{ backgroundImage: `url(${a})` }}></div>
        </div>
      </div>

<div className="stage" style={{ width: "120px", height: "120px" }}>
<div className="cubespinner2">
  <div className="face1"  style={{ backgroundImage: `url(${b})` }}></div>
  <div className="face2"  style={{ backgroundImage: `url(${b})` }}></div>
  <div className="face3"  style={{ backgroundImage: `url(${b})` }}></div>
  <div className="face4"  style={{ backgroundImage: `url(${b})` }}></div>
  <div className="face5"  style={{ backgroundImage: `url(${b})` }}></div>
  <div className="face6"  style={{ backgroundImage: `url(${b})` }}></div>
</div>
</div>

<div className="stage" style={{ width: "120px", height: "120px" }}>
<div className="cubespinner3">
  <div className="face1"  style={{ backgroundImage: `url(${c})` }}></div>
  <div className="face2"  style={{ backgroundImage: `url(${c})` }}></div>
  <div className="face3"  style={{ backgroundImage: `url(${c})` }}></div>
  <div className="face4"  style={{ backgroundImage: `url(${c})` }}></div>
  <div className="face5"  style={{ backgroundImage: `url(${c})` }}></div>
  <div className="face6"  style={{ backgroundImage: `url(${c})` }}></div>
</div>
</div>

<div className="stage" style={{ width: "120px", height: "120px" }}>
<div className="cubespinner4">
  <div className="face1"  style={{ backgroundImage: `url(${d})` }}></div>
  <div className="face2"  style={{ backgroundImage: `url(${d})` }}></div>
  <div className="face3"  style={{ backgroundImage: `url(${d})` }}></div>
  <div className="face4"  style={{ backgroundImage: `url(${d})` }}></div>
  <div className="face5"  style={{ backgroundImage: `url(${d})` }}></div>
  <div className="face6"  style={{ backgroundImage: `url(${d})` }}></div>
</div>
</div>
      </>
    )
};

export default Cubes;
