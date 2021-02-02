import React from 'react';
import {NavLink} from "react-router-dom";
import cssCls from './Header.module.css';
import noPhoto from './../../assets/img/noPhoto.jpeg'

const Header = (props) => {
    return (
        <header className={cssCls.header}>
            <img src="https://s2.logaster.com/static/v3/img/products/logo.png" alt=""/>
            <div className={cssCls.login_block}>
                {
                    props.isAuthorized ?
                    <NavLink to={'#'} className={cssCls.login_link}>{props.login}</NavLink>
                    : <NavLink to={'#'} className={cssCls.login_link}>Регистрация/Войти</NavLink>
                }

                    <div className={cssCls.login_photo}>
                        {
                            props.isAuthorized ?
                                <img src={props.userLogPhoto} alt=""/> : <img src={noPhoto} alt=""/>
                        }
                    </div>

            </div>
        </header>
    )
};

export default Header;