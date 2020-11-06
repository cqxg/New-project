import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Menu from './components/Menu/Menu';
import { Routes } from './routes/routes';

const App = () => (
  <Suspense fallback="Loading...">
    <BrowserRouter>
      <Menu/>
      <Routes/>
    </BrowserRouter>
  </Suspense>
);

export default App;
