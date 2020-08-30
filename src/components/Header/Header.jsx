import React from 'react';
import cssCls from './Header.module.css'

const Header = (props) => {
    return (
        <header className={cssCls.header}>
            <img src="https://s2.logaster.com/static/v3/img/products/logo.png" alt=""/>
        </header>
    )
};

export default Header;