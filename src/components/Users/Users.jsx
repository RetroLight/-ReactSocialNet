import React from 'react';
import UsersListCont from "./UsersList/UsersListCont";
import cssCls from './Users.module.css';

const Users = () => {

    return (
        <div className={cssCls.usersContentWrapper}>
            <UsersListCont />
        </div>
    )
};

export default Users;