import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

const App = () => (
  <Suspense fallback="Loading...">
    <BrowserRouter>
      <div>Just new App</div>
    </BrowserRouter>
  </Suspense>
);

export default App;
