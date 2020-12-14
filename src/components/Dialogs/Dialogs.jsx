import React from 'react';
import cssCls from './Dialogs.module.css';
import Dialog_messages_cont from "./Dialog_messages/Dialog_messages_cont";
import Dialog_users_cont from "./Dialog_users/Dialog_users_cont";


const Dialogs = () => {
    return (
        <div className={cssCls.dialogs_wrapper}>
            <Dialog_users_cont />
            <Dialog_messages_cont />
        </div>
    );
};

export default Dialogs;