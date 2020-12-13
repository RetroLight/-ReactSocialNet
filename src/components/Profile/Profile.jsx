import React from 'react';
import cssCls from './Profile.module.css';
import Profile_info from "./Profile_Info/Profile_info";
import MyPostsCont from "./MyPosts/MyPostsCont";

const Profile = (props) => {

    return (
        <div className={cssCls.Profile}>
            <Profile_info/>
            <MyPostsCont store={props.store}/>
        </div>
    )
};

export default Profile;