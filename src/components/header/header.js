import React from 'react';

import './header.css'
import logo from '../img/svg/aviasales-logo.svg';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="/" className="header__logo-link">
                    <img src={logo} alt="Aviasales" className="header__logo-pic" />
                </a>
            </div>
        </header>
    )
};
export default Header;