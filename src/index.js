import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';

import './i18n';
import App from './App';
import '@brainhubeu/react-carousel/lib/style.css';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

const app = () => {
    return (
        <CookiesProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </CookiesProvider>
    )
}

ReactDOM.render(app(), document.getElementById('root'));
