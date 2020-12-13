import React from "react";
import Dialog_users from "./Dialog_users.jsx";

const Dialog_users_cont = (props) => {

    return (
        <Dialog_users state={props.store.getState().messagesPage}/>
    )
};


export default Dialog_users_cont;