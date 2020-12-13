import React from "react";
import cssCls from './../Dialogs.module.css';
import Dialog_user_item from "./Dialog_user_item/Dialog_user_item.jsx";

const Dialog_users = (props) => {

    const user_dialogs_elems = props.state.user_dialog_data_arr
        .map(dialog => <Dialog_user_item
            userAvtrPath={dialog.user_avtr_path}
            userName={dialog.user_name}
            userId={dialog.user_id}
            userShortTxt={dialog.user_short_txt}
        />);

    return (
        <div className={cssCls.dialog_users}>
            {user_dialogs_elems}
        </div>
    )
};

export default Dialog_users;