import React from 'react';
import cssCls from './Dialogs.module.css';
import Msg_item from "./Msg_item/Msg_item";
import Dialog_user_item from "./Dialog_user_item/Dialog_user_item";


const Dialogs = (props) => {

    const user_dialogs = props.user_dialog_data_arr
        .map(dialog => <Dialog_user_item
        userAvtrPath={dialog.user_avtr_path}
        userName={dialog.user_name}
        userId={dialog.user_id}
        userShortTxt={dialog.user_short_txt}
    />);

    const user_messages = props.user_msg_data_arr
        .map(message => <Msg_item
            avtr_path={message.msg_avtr}
            message_text={message.msg_text}
            acc_owner={message.acc_owner}
        />);

    return(
        <div className={cssCls.dialogs_wrapper}>
            <div className={cssCls.dialog_users}>
                {user_dialogs}
            </div>

            <div className={cssCls.dialog_messages}>
                {user_messages}
            </div>
        </div>
    )
};

export default Dialogs;