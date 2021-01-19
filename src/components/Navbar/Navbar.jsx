import React from 'react'
import cssCls from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const  Navbar = (props) => {
    return (
        <nav className={cssCls.nav}>
            <div className={cssCls.item}>
                <NavLink to="/profile" activeClassName={cssCls.active}>Моя страница</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/dialogs" activeClassName={cssCls.active}>Диалоги</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/users" activeClassName={cssCls.active}>Пользователи</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/news" activeClassName={cssCls.active}>Новости</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/music" activeClassName={cssCls.active}>Музыка</NavLink>
            </div>
            <div className={cssCls.item}>
                <NavLink to="/settings" activeClassName={cssCls.active}>Настройки</NavLink>
            </div>
        </nav>
    )
};


export default Navbar;