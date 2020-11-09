import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';

import './i18n';
import App from './App';

import './index.css';

const app = () => {
    return (
        <CookiesProvider>
            <App />
        </CookiesProvider>
    )
}

ReactDOM.render(app(), document.getElementById('root'));
