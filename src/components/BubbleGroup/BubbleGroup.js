import React from "react";

import { Blob } from "react-blob";

const bubbleGroup = () => (
  <>
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        right: "25%",
        left: "1%",
        top: "2%",
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
        top: "80%"
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="5vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        top: "15%",
        right: "10%",
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
        top: "15%",
        right: "30%",
      }}
      animationDuration="30s"
    >
      <i className="fab fa-react"></i>
    </Blob>
    <Blob
      size="25vh"
      style={{
        zIndex: -1,
        backgroundColor: "#D5EFFB",
        position: "absolute",
        left: "12%",
        top: "2%",
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
        left: "20%",
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
        top: "15%",
        right: "10%",
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
        top: "15%",
        right: "30%",
      }}
      animationDuration="30s"
    >
      <i className="fab fa-react"></i>
    </Blob>
  </>
);

export default bubbleGroup;
