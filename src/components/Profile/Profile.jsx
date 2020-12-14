import React from 'react';
import cssCls from './Profile.module.css';
import Profile_info from "./Profile_Info/Profile_info";
import MyPostsCont from "./MyPosts/MyPostsCont";

const Profile = () => {

    return (
        <div className={cssCls.Profile}>
            <Profile_info/>
            <MyPostsCont />
        </div>
    )
};

export default Profile;