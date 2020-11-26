import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { ParallaxProvider } from 'react-scroll-parallax';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './i18n';

import './index.css';


import App from './App';

const app = () => (
  <CookiesProvider>
    <BrowserRouter>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </BrowserRouter>
  </CookiesProvider>
);

ReactDOM.render(app(), document.getElementById('root'));
