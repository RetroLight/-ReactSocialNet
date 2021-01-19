import React from 'react';
import {connect} from "react-redux";
import UsersList from "./UsersList";
import {
    followUserActionCreator,
    unfollowActionCreator,
    fillUsersActionCreator,
    setTotalUsersAC,
    setCurrentPageAC
} from "../../../redux/usersPageReducer";

const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        total_users_count: state.usersPage.total_users_count,
        items_count: state.usersPage.items_count,
        current_page: state.usersPage.current_page
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        followBtn: (userId) => {
            dispatch(followUserActionCreator(userId))
        },
        unfollowBtn: (userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers: (users) => {
            dispatch(fillUsersActionCreator(users))
        },
        setTotalUsers: (totalUsersCount) => {
            dispatch(setTotalUsersAC(totalUsersCount))
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        }
    }
};

const UsersListCont = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListCont;