import React from 'react';

import { Blob } from '../Blob/Blob';
import { bubbleTexture } from './bubbleTexture';

const bubbleGroup = () => (
  <>
    <Blob
      size="20vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '10%',
        bottom: '70%',
      }}
      animationDuration="15s"
    >
      {bubbleTexture()}
    </Blob>
    <Blob
      size="35vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '2%',
        top: '35%',
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    >
      {bubbleTexture()}
    </Blob>
    <Blob
      size="10vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        bottom: '65%',
        left: '37%',
      }}
      animationDuration="50s"
      animationTimingFunction="ease-in-out"
    >
      {bubbleTexture()}
    </Blob>
    <Blob
      size="20vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '55%',
      }}
      animationDuration="30s"
    >
      {bubbleTexture()}
    </Blob>
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: '60%',
        left: '50%',
      }}
      animationDuration="15s"
    >
      {bubbleTexture()}
    </Blob>
    <Blob
      size="25vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: '60%',
        left: '70%',
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    >
      {bubbleTexture()}
    </Blob>
    <Blob
      size="10vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: '37%',
        left: '90%',
      }}
      animationDuration="50s"
      animationTimingFunction="ease-in-out"
    >
      {bubbleTexture()}
    </Blob>
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '90%',
      }}
      animationDuration="30s"
    >
      {bubbleTexture()}
    </Blob>
  </>
);

export default bubbleGroup;
