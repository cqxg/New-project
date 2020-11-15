import React from 'react';

import { Blob } from '../Blob/Blob';

const bubbleSixBlock = () => (
  <Blob
    size="50vh"
    style={{
      zIndex: -1,
      backgroundColor: '#D5EFFB',
    }}
    animationDuration="15s"
  >
    <i className="fab fa-react" />
  </Blob>
);

export default bubbleSixBlock;
