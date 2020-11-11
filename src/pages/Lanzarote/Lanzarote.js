import React from 'react';
import { useTranslation } from 'react-i18next';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import About from './About/About';

import Header from './Header/Header';

import './Lanzarote.scss'

const Lanzarote = () => {
    const { t } = useTranslation();

    return (
        <div className="lanzarote">
            <Header/>
            <BreadCrumbs scheme="lanzarote"/>
            <About t={t}/>
        </div>
    )
}

export default Lanzarote;