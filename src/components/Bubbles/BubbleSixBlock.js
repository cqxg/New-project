import React from 'react';

import { Blob } from '../Blob/Blob';
import { bubbleTexture } from './bubbleTexture';

const bubbleSixBlock = () => (
  <Blob
    size="50vh"
    style={{
      zIndex: -1,
    }}
    animationDuration="15s"
  >
    {bubbleTexture()}
  </Blob>
);

export default bubbleSixBlock;
