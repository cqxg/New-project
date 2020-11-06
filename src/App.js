import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './routes/routes';

const App = () => (
  <Suspense fallback="Loading...">
    <BrowserRouter>
      <Routes/>
    </BrowserRouter>
  </Suspense>
);

export default App;
