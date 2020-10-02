import React from 'react';
import cssCls from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profile_info from "./Profile_Info/Profile_info";



const Profile = (props) => {
    return (
        <div className={cssCls.Profile}>
            <Profile_info/>
            <MyPosts posts_data_arr={props.posts_data_arr}/>
        </div>
    )
};

export default Profile;