import React from 'react';

import { Blob } from '../Blob/Blob';

const bubbleForSecondBlocs = () => (
  <>
    {/* Left blobs */}
    <Blob
      size="15vh"
      style={{
        zIndex: -1,
        backgroundColor: '#D5EFFB',
        color: 'white',
        fontSize: '80vh',
        position: 'absolute',
        left: '12%',
        top: '2%',
      }}
      animationDuration="15s"
    >
      <i className="fab fa-react" />
    </Blob>
    <Blob
      size="32vh"
      style={{
        zIndex: -1,
        backgroundColor: '#D5EFFB',
        color: 'white',
        fontSize: '80vh',
        position: 'absolute',
        left: '20%',
      }}
      animationDuration="25s"
      animationTimingFunction="ease-in-out"
    >
      <i className="fab fa-react" />
    </Blob>

    {/* Right blobs */}
    <Blob
      size="40vh"
      style={{
        zIndex: -1,
        backgroundColor: '#D5EFFB',
        color: 'white',
        fontSize: '80vh',
        position: 'absolute',
        top: '15%',
        height: '50vh',
        right: '10%',
      }}
      animationDuration="50s"
      animationTimingFunction="ease-in-out"
    >
      <i className="fab fa-react" />
    </Blob>
    <Blob
      size="10vh"
      style={{
        zIndex: -1,
        backgroundColor: '#D5EFFB',
        color: 'white',
        fontSize: '80vh',
        position: 'absolute',
        top: '15%',
        right: '30%',
      }}
      animationDuration="30s"
    >
      <i className="fab fa-react" />
    </Blob>
  </>
);

export default bubbleForSecondBlocs;
