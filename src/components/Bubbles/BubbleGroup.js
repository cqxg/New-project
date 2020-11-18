import React from 'react';

import { Blob } from '../Blob/Blob';

const bubbleGroup = () => (
  <>
    <Blob
      size="20vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '10%',
        backgroundColor: '#D1F1FD',
        bottom: '70%',
      }}
      animationDuration="15s"
    />
    <Blob
      size="35vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        backgroundColor: '#D1F1FD',
        left: '2%',
        top: '35%',
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    />
    <Blob
      size="10vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        bottom: '65%',
        backgroundColor: '#D1F1FD',
        left: '37%',
      }}
      animationDuration="50s"
      animationTimingFunction="ease-in-out"
    />
    <Blob
      size="20vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '55%',
        backgroundColor: '#D1F1FD',
      }}
      animationDuration="30s"
    />
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: '60%',
        backgroundColor: '#D1F1FD',
        left: '50%',
      }}
      animationDuration="15s"
    />
    <Blob
      size="25vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: '60%',
        backgroundColor: '#D1F1FD',
        left: '70%',
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    />
    <Blob
      size="10vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        top: '37%',
        backgroundColor: '#D1F1FD',
        left: '90%',
      }}
      animationDuration="50s"
      animationTimingFunction="ease-in-out"
    />
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        position: 'absolute',
        left: '90%',
        backgroundColor: '#D1F1FD',
      }}
      animationDuration="30s"
    />
  </>
);

export default bubbleGroup;
