import React from "react";

import './Inputs.scss'

const Inputs = ({ type, placeholder }) => {
  switch (type) {
    case "input":
      return <input placeholder={placeholder} />;
    case "textarea":
      return <textarea placeholder={placeholder} />;
    default:
  }
};

export default Inputs;
