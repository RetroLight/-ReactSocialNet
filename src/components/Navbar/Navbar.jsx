import React from 'react'
import cssCls from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const  Navbar = (props) => {
    return (
        <nav className={cssCls.nav}>
            <div className={cssCls.item}>
                <NavLink to="/profile" activeClassName={cssCls.active}>Profile</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/dialogs" activeClassName={cssCls.active}>Dialogs</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/news" activeClassName={cssCls.active}>News</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/music" activeClassName={cssCls.active}>Music</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/settings" activeClassName={cssCls.active}>Settings</NavLink>
            </div>
        </nav>
    )
};


export default Navbar;