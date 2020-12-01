import React from "react";
import morphingSvgBlobs from "./morphingSvgBlobs";

const SvgBlobs = ({ index, width }) => {
  morphingSvgBlobs(index);
  return (
    <svg width={width} id="svg" viewBox="0 0 1000 1000">
      <defs>
        <radialGradient id="paint0_radial" fx="25%" fy="25%">
          {/* <stop offset="0%"
            stopColor={index%2 === 0 ? "#D1F1FD" : "#fff"} /> */}
          <stop offset="30%"
            stopColor="#fff"
            stopOpacity=".4" />
          <stop offset="90%"
            stopColor="#D1F1FD"
            stopOpacity=".6" />
          <stop offset="100%"
            stopColor="#D1F1FD"
            stopOpacity=".8"
          />
        </radialGradient>
      </defs>
      <path id={`morph${index}`} fill="url(#paint0_radial)"></path >
    </svg>
  );
};

export default SvgBlobs;
