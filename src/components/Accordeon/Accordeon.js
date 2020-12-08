import React from "react";

import "./Accordeon.scss";

const Accordeon = ({ number, accordionTitle, accordionText }) => {
  return (
    <div className="accordion">
      <div className="trigger">
        <input
          type="checkbox"
          id={`checkbox-${number}`}
          name={`checkbox-${number}`}
        />
        <label for={`checkbox-${number}`} className="checkbox">
          <p>{accordionTitle}</p>
          <i></i>
        </label>
        <div className="content">
          <p>{accordionText}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordeon;
