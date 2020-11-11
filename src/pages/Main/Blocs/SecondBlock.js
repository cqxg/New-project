import React from "react";
import { Blob } from "react-blob";

import Button from "../../../components/Buttons/Button";
import pathicon from "../../../assets/group1.png";

const SecondBlock = ({ t }) => (
  <div className="main_second__block">
    <div className="main_second__block-titlewrapper">
      <h1 className="main_second__block-title">{t("aboutVidodoGuide")}</h1>
      <Button icon={pathicon} type="secondary" />
    </div>
    <div className="main_second__block-cols">
      <div className="main_second__block-col">
        <p className="main_second__block-desc">{t("secondBlockDescOne")}</p>
        <p className="main_second__block-desc">{t("secondBlockDescTwo")}</p>
        <Blob
          size="13vh"
          style={{
            zIndex: -1,
            backgroundColor: "#D5EFFB",
            position: "absolute",
            left: "30%",
            top: "0",
          }}
          animationDuration="10s"
        >
          <i className="fab fa-react"></i>
        </Blob>
        <Blob
          size="35vh"
          style={{
            zIndex: -1,
            backgroundColor: "#D5EFFB",
            position: "absolute",
            left: "50%",
            top: "0",
          }}
          animationDuration="25s"
        >
          <i className="fab fa-react"></i>
        </Blob>
      </div>
      <div className="main_second__block-col">
        <p className="main_second__block-desc">{t("secondBlockDescThree")}</p>
        <p className="main_second__block-desc">{t("secondBlockDescFour")}</p>
        <Blob
          size="13vh"
          style={{
            zIndex: -1,
            backgroundColor: "#D5EFFB",
            position: "absolute",
            left: "40%",
            top: "25%",
          }}
          animationDuration="25s"
        >
          <i className="fab fa-react"></i>
        </Blob>
        <Blob
          size="45vh"
          style={{
            zIndex: -1,
            backgroundColor: "#D5EFFB",
            position: "absolute",
            left: "70%",
            top: "40%",
          }}
          animationDuration="25s"
        >
          <i className="fab fa-react"></i>
        </Blob>
      </div>
    </div>
  </div>
);

export default SecondBlock;
