import React from "react";

import "./Accordeon.scss";

const Accordeon = ({number}) => {
  return (
    <div className="accordion">
      <div className="trigger">
        <input type="checkbox" id={`checkbox-${number}`} name={`checkbox-${number}`} />
        <label for={`checkbox-${number}`} className="checkbox">
          <p>
            Какие выплаты положены работнику при увольнении по собственному
            желанию?
          </p>
          <i></i>
        </label>
        <div className="content">
          <p>
            The magic Indian is a mysterious spiritual force, and we're going to
            Cathedral Rock, and that's the vortex of the heart.You ever roasted
            doughnuts?These kind of things only happen for the first time
            once.Did you feel that? Look at me - I'm not out of breath anymore!{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordeon;
