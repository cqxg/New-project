import React from "react";
import morphingSvgBlobs from "./morphingSvgBlobs";

const SvgBlobs = ({ index, width }) => {
  morphingSvgBlobs(index);
  return (
    <svg width={width} id="svg" viewBox="0 0 1000 1000">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop stop-color="#D5EFFB" />
          <stop offset="0.437612" stop-color="#E2F6FF" stop-opacity="0.35" />
          <stop offset="1" stop-color="#BBEAFF" stop-opacity="0.19" />
        </linearGradient>
      </defs>
      <path id={`morph${index}`} fill="url(#grad)"></path >
    </svg>



  );
};

export default SvgBlobs;
