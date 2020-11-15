import React from "react";

import { Blob } from "../Blob/Blob";

const bubbleGroup = () => (
  <>
    <Blob
      size="20vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        left: "10%",
        bottom: "70%",
      }}
      animationDuration="15s"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="35vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        left: "2%",
        top: "35%",
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="10vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        bottom: "65%",
        left: "37%",
      }}
      animationDuration="50s"
      animationTimingFunction="ease-in-out"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="20vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        left: "55%",
      }}
      animationDuration="30s"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        top: "60%",
        left: "50%",
      }}
      animationDuration="15s"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="25vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        top: "60%",
        left: "70%",
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="10vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        top: "37%",
        left: "90%",
      }}
      animationDuration="50s"
      animationTimingFunction="ease-in-out"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        left: "90%",
      }}
      animationDuration="30s"
    >
      <i className="fab fa-react"></i>
    </Blob>
  </>
);

export default bubbleGroup;
