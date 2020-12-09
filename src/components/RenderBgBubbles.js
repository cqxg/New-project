import React from 'react';
import { Parallax, useController } from "react-scroll-parallax";
import SvgBlobs from '../utils/svgBlobs/SvgBlobs';

const RenderBackgroundBubbles = (numbers) => {
    const { parallaxController } = useController();
    const coordinates = [];
    const maxNum = numbers || 12;
    const pageHeight = document.querySelector(".switch-wrapper div:first-child")?.offsetHeight;
    const max = pageHeight,
      min = document.documentElement.clientHeight;
    for (let i = 0; i < maxNum; i++) {
      coordinates.push(Math.floor(Math.random() * (max - min + 1) + min));
    }
    parallaxController.update();

    return (
      <>
        {coordinates.map((num, index) => {
          return (
            <Parallax
              key={index}
              y={[100, -100]}
              className="custom-class"
              tagOuter="figure"
            >
              <div key={index} className="animate__animated bg__bubbles">
                <SvgBlobs
                  width={`${Math.floor(Math.random() * 150 + 75)}`}
                  index={index}
                />
              </div>
            </Parallax>
          );
        })}
      </>
    );
  };


  export default RenderBackgroundBubbles;