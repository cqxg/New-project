import React from 'react';
import { useTranslation } from 'react-i18next';

import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import constructor from '../../constructors/constructor'
import About from './About/About';
import Features from './Features/Features';
import Header from './Header/Header';

import './Lanzarote.scss'

const Lanzarote = () => {
    const { t } = useTranslation();
    const pageConstructor = constructor.lanzarote

    return (
        <div className="lanzarote">
            <Header/>
            <BreadCrumbs scheme="lanzarote"/>
            <About t={t}/>
            <Features constructor={pageConstructor} scheme="features"/>
        </div>
    )
}

export default Lanzarote;