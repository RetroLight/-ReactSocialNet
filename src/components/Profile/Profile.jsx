import React from 'react';
import cssCls from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import Profile_info from "./Profile_Info/Profile_info";

const Profile = (props) => {

    return (
        <div className={cssCls.Profile}>
            <Profile_info/>
            <MyPosts posts_data_arr={props.profile_page_state.posts_data_arr} newPostTxt={props.profile_page_state.newPostTxt} dispatch={props.dispatch}/>
        </div>
    )
};

export default Profile;