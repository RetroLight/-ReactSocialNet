import React from 'react';
import {connect} from "react-redux";
import UsersList from "./UsersList";
import {
    followUser,
    unfollow,
    fillUsers,
    setTotalUsers,
    setCurrentPage,
    toggleIsFetching
} from "../../../redux/usersPageReducer";
import * as axios from "axios";

class UsersListCont extends React.Component {

    componentDidMount() {
        this.props.fillUsers([]);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items_count}&page=${this.props.current_page}`)
            .then(response => {
                this.props.fillUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
                this.props.toggleIsFetching(false);
                console.log(response.data.items)
            });

    }

    onPageClick = (page) => {
        this.props.fillUsers([]);
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items_count}&page=${page}`)
            .then(response => {
                this.props.fillUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    };

    render() {
        return (
            <UsersList total_users_count={this.props.total_users_count}
                       items_count={this.props.items_count}
                       current_page={this.props.current_page}
                       onPageClick={this.onPageClick}
                       usersList={this.props.usersList}
                       unfollowBtn={this.props.unfollow}
                       isFetching={this.props.isFetching}
                       followBtn={this.props.followUser}/>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        usersList: state.usersPage.usersList,
        total_users_count: state.usersPage.total_users_count,
        items_count: state.usersPage.items_count,
        current_page: state.usersPage.current_page,
        isFetching: state.usersPage.isFetching
    }
};

export default connect(mapStateToProps, {followUser, unfollow, fillUsers, setTotalUsers, setCurrentPage, toggleIsFetching})(UsersListCont);