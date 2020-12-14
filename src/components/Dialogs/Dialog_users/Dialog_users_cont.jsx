import React from "react";
import Dialog_users from "./Dialog_users.jsx";
import StoreContext from "../../../StoreContext";

const Dialog_users_cont = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => <Dialog_users state={store.getState().messagesPage}/>
            }
        </StoreContext.Consumer>
    )
};


export default Dialog_users_cont;