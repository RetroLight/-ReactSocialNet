import React from "react";
import Dialog_messages from "./Dialog_messages";
import {addMsgActionCreator, updateMsgActionCreator} from "../../../redux/messagesPageReducer";
import StoreContext from "../../../StoreContext";

const Dialog_messages_cont = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    let state = store.getState().messagesPage;

                    const msgWriteTxt = (newMsgTxt) => {
                        store.dispatch(updateMsgActionCreator(newMsgTxt));
                    };

                    const addMsg = () => {
                        store.dispatch(addMsgActionCreator())
                    };

                    return (
                        <Dialog_messages msgWriteTxt={msgWriteTxt}
                                         addMsg={addMsg}
                                         state={state}/>
                    )
                }

            }
        </StoreContext.Consumer>
    )
};

export default Dialog_messages_cont;

