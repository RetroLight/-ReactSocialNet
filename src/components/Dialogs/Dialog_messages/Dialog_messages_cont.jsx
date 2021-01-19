import React from "react";
import Dialog_messages from "./Dialog_messages";
import {addMsgActionCreator, updateMsgActionCreator} from "../../../redux/messagesPageReducer";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        state: state.messagesPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        msgWriteTxt: (newMsgTxt) => {
            dispatch(updateMsgActionCreator(newMsgTxt))
        },
        addMsg: () => dispatch(addMsgActionCreator())
    }
};

const Dialog_messages_cont = connect(mapStateToProps, mapDispatchToProps)(Dialog_messages);



export default Dialog_messages_cont;