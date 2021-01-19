import React from "react";
import Dialog_users from "./Dialog_users.jsx";
import {connect} from "react-redux";



const mapStateToProps = (state) => {
    return {
        state: state.messagesPage
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    }
};

const Dialog_users_cont = connect(mapStateToProps, mapDispatchToProps)(Dialog_users);


export default Dialog_users_cont;