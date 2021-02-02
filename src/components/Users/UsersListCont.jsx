import React from 'react';
import Users from "./Users";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    fillUsers,
    followUser,
    setCurrentPage,
    setTotalUsers,
    toggleIsFetching,
    unfollow
} from "../../redux/usersPageReducer";

class UsersListCont extends React.Component {

    componentDidMount() {
        this.props.fillUsers([]);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items_count}&page=${this.props.current_page}`,
            {withCredentials: true})
            .then(response => {
                this.props.fillUsers(response.data.items);
                this.props.setTotalUsers(response.data.totalCount);
                this.props.toggleIsFetching(false);
            });

    }

    onPageClick = (page) => {
        this.props.fillUsers([]);
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(page);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.items_count}&page=${page}`, {
            withCredentials: true
        })
            .then(response => {
                this.props.fillUsers(response.data.items);
                this.props.toggleIsFetching(false);
            });
    };

    render() {
        return (
            <Users {...this.props} onPageClick={this.onPageClick}/>

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