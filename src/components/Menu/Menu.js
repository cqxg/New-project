import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink, Link } from 'react-router-dom';

import germanyFlag from '../../img/svg/germany-flag.svg';
import polandFlag from '../../img/svg/poland-flag.svg';
import usaFlag from '../../img/svg/usa-flag.svg';
import logo from '../../img/svg/logo.svg';
// import logoLight from "../../img/svg/logoLight.svg";
import flag from '../../img/svg/flag.svg';

import { menu } from './menuConstructor';

import './menu.scss';

const Menu = (props) => {
  const { theme, changeLocale, activeLocale } = props;
  const { t, i18n } = useTranslation();
  const setLanguage = (language) => {
    i18n.changeLanguage(language);
    changeLocale(language);
  };
  const [toggleMenu, setToggleMenu] = useState(false);

  const renderSubMenu = (item, index) => (
    <div
      onMouseEnter={() => setToggleMenu(true)}
      onMouseLeave={() => setToggleMenu(false)}
      className="menu__container-submenuactive"
      key={index}
    >
      <NavLink key={item.text} to={item.link}>
        <li>
          {t(item.text)}
          <span className={toggleMenu ? 'active' : ''}>
            <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L7 7L13 1" stroke={theme === 'dark' ? '#1E2843' : '#fff'} strokeWidth="2" />
            </svg>
          </span>
        </li>
      </NavLink>
      <ul
        style={
            toggleMenu
              ? { transform: 'scaleY(1)', opacity: 1 }
              : { transform: 'scaleY(0)', opacity: 0 }
          }
        className="menu__container-submenu"
      >
        {item.subMenu.map((value, index) => (
          <NavLink key={index} to={item.link}>
            <li>{t(value.text)}</li>
          </NavLink>
        ))}
      </ul>
    </div>
  );

  const renderMenu = () => menu.map((item, index) => {
    if (item.subMenu) {
      return renderSubMenu(item, index);
    } return (
      <NavLink key={index} to={item.link}>
        <li>{t(item.text)}</li>
      </NavLink>
    );
  });

  return (
    <div className={`menu menu-${theme}`}>
      <div className="menu__container">
        <Link to="/">
          <div className="menu__container-logo">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="menu__container-list">{renderMenu()}</ul>
        <ul className="menu__container-flags">
          <li className={activeLocale === 'pl' ? 'active' : ''} onClick={() => setLanguage('pl')}>
            <img src={polandFlag} alt="polandFlag" />
          </li>
          <li className={activeLocale === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>
            <img src={usaFlag} alt="usaFlag" />
          </li>
          <li className={activeLocale === 'de' ? 'active' : ''} onClick={() => setLanguage('de')}>
            <img src={germanyFlag} alt="germanyFlag" />
          </li>
          <li className={activeLocale === 'es' ? 'active' : ''} onClick={() => setLanguage('es')}>
            <img src={flag} alt="flag" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
