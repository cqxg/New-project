import React from 'react'
import { NavLink } from 'react-router-dom'
import { menu } from './menuConstructor'
import './menu.scss'
import logo from '../../img/svg/logo.svg'
import polandFlag from '../../img/svg/poland-flag.svg'
import usaFlag from '../../img/svg/usa-flag.svg'
import germanyFlag from '../../img/svg/germany-flag.svg'
import flag from '../../img/svg/flag.svg'

const Menu = () => {
    const renderMenu = () => menu.map((item) => <NavLink to={item.link}><li>{item.text}</li></NavLink>)

    return (
        <div className="menu">
            <div className="menu__container">
                <div className="menu__container-logo"><img src={logo} alt="logo"/></div>
                <ul className="menu__container-list">{renderMenu()}</ul>
                <ul className="menu__container-flags">
                    <li><img src={polandFlag} alt="polandFlag"/></li>
                    <li><img src={usaFlag} alt="usaFlag"/></li>
                    <li><img src={germanyFlag} alt="germanyFlag"/></li>
                    <li><img src={flag} alt="flag"/></li>
                </ul>
            </div>

        </div>
    )
}

export default Menu;