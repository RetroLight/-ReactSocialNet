import React from 'react';
import UsersList from "./UsersList/UsersList";
import cssCls from "./Users.module.css";


const Users = (props) => {
    return (
        <div className={cssCls.usersContentWrapper}>
            <UsersList {...props} onPageClick={props.onPageClick}/>
        </div>
    )
};

export default Users;