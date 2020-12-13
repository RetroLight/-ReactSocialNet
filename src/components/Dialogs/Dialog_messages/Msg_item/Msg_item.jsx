import cssCls from "../../Dialogs.module.css";
import React from "react";

const Msg_item = (props) => {

    let avtrPath = props.avtr_path;
    let msgText = props.message_text;
    let msg_class = () => {
        if(props.acc_owner) {
            return `${cssCls.msg_item} ${cssCls.myMsg}`
        }
        else {
            return `${cssCls.msg_item}`
        }
    };

    return (
        <div className={msg_class()}>
            <div className={cssCls.msg_avtr_wrapper}>
                <img src={avtrPath} alt=""/>
            </div>
            <span className={cssCls.msg_text_wrapper}>{msgText}</span>
        </div>
    )
};

export default Msg_item;