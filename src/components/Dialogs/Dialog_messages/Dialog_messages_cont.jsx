import React from "react";
import Dialog_messages from "./Dialog_messages";
import {addMsgActionCreator, updateMsgActionCreator} from "../../../redux/messagesPageReducer";

const Dialog_messages_cont = (props) => {

    let store = props.store;
    let state = store.getState().messagesPage;

    const msgWriteTxt = (newMsgTxt) => {
        store.dispatch(updateMsgActionCreator(newMsgTxt));
    };

    const addMsg = () => {
        store.dispatch(addMsgActionCreator())
    };

    return (
        <Dialog_messages msgWriteTxt={msgWriteTxt} addMsg={addMsg} state={state}/>
    )
};

export default Dialog_messages_cont;

