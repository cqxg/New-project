import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes/routes';
import Menu from './components/Menu/Menu';

import './App.css';

const App = () => (
  <Suspense fallback="Loading...">
    <BrowserRouter>
      <Menu/>
      <Routes/>
    </BrowserRouter>
  </Suspense>
);

export default App;
