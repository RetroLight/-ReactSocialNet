import React from "react";
import cssCls from "./../../Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialog_user_item = (props) => {

    let userAvtrPath = props.userAvtrPath;
    let userName = props.userName;
    let userShortTxt = props.userShortTxt;
    let userId = '/dialogs/' + props.userId;

    return (
        <NavLink to={userId} className={cssCls.user_item} activeClassName={cssCls.active}>
            <div className={cssCls.avatar_wrapper}>
                <img src={userAvtrPath} alt=""/>
            </div>
            <div className={cssCls.short_inf_wrapper}>
                <span className={cssCls.user_item_name}>{userName}</span>
                <span className={cssCls.user_item_shortText}>{userShortTxt}</span>
            </div>
        </NavLink>
    )
};

export default Dialog_user_item;