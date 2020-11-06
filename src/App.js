import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/routes';

import './App.css';

const App = () => (
  <Suspense fallback="Loading...">
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Suspense>
);

export default App;
