import React from 'react';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavMenu from '../NavMenu/NavMenu';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <NavMenu></NavMenu>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;