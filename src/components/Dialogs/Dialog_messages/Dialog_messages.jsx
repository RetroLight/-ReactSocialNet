import React from "react";
import cssCls from "./../Dialogs.module.css";
import Msg_item from "./Msg_item/Msg_item";

const Dialog_messages = (props) => {

    const new_msg_elem = React.createRef();

    const onMsgChange = () => {
        let newMsgTxt = new_msg_elem.current.value;
        props.msgWriteTxt(newMsgTxt);
    };

    const onMsgAdd = () => {
        props.addMsg();
    };

    const user_messages_elems = props.state.user_msg_data_arr
        .map(message => <Msg_item
            avtr_path={message.msg_avtr}
            message_text={message.msg_text}
            acc_owner={message.acc_owner}
        />);

    return (
        <div className={cssCls.dialog_messages_wrapper}>
            <div className={cssCls.dialog_messages}>
                {user_messages_elems}
            </div>
            <div className={cssCls.new_messages_block}>
                <textarea onChange={onMsgChange} ref={new_msg_elem} placeholder={'Текст сообщения'}
                          value={props.state.newMsgText} name="" id="" cols="auto" rows="1"/>
                <button onClick={onMsgAdd}>Отправить</button>
            </div>
        </div>
    )
};

export default Dialog_messages;