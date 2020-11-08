import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';

import germanyFlag from '../../img/svg/germany-flag.svg';
import polandFlag from '../../img/svg/poland-flag.svg';
import usaFlag from '../../img/svg/usa-flag.svg';
import arrow from '../../img/svg/arrow.svg';
import logo from '../../img/svg/logo.svg';
import flag from '../../img/svg/flag.svg';

import { menu } from './menuConstructor';

import './menu.scss';

const Menu = () => {
    const { t, i18n } = useTranslation();
    const setLanguage = (language) => i18n.changeLanguage(language);

    const renderMenu = () => menu.map((item, index) => {

        if (item.subMenu) {
            return (
                <React.Fragment key={index}>
                    <NavLink key={item.text} to={item.link}>
                        <li className="menu__container-submenuactive">{t(item.text)}<span><img src={arrow} alt="arrow" /></span></li>
                        <ul className="menu__container-submenu">
                            {item.subMenu.map((value, index) => <NavLink key={index} to={item.link}><li>{t(item.text)}</li></NavLink>)}
                        </ul>
                    </NavLink>
                </React.Fragment>
            )
        } else return <NavLink key={index} to={item.link}><li>{t(item.text)}</li></NavLink>
    });

    return (
        <div className="menu">
            <div className="menu__container">
                <Link to="/"><div className="menu__container-logo"><img src={logo} alt="logo" /></div></Link>
                <ul className="menu__container-list">{renderMenu()}</ul>
                <ul className="menu__container-flags">
                    <li onClick={() => setLanguage('pl')}><img src={polandFlag} alt="polandFlag" /></li>
                    <li onClick={() => setLanguage('en')} ><img src={usaFlag} alt="usaFlag" /></li>
                    <li onClick={() => setLanguage('de')}><img src={germanyFlag} alt="germanyFlag" /></li>
                    <li onClick={() => setLanguage('es')}><img src={flag} alt="flag" /></li>
                </ul>
            </div>

        </div>
    )
};

export default Menu;