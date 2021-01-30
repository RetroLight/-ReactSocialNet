import React from "react";
import cssCls from "./Profile.module.css";
import Profile_info from "./Profile_Info/Profile_info";
import MyPosts from "./MyPosts/MyPosts";


const Profile = (props) => {
    return (
        <div className={cssCls.Profile}>
            <Profile_info {...props}/>
            <MyPosts {...props}/>
        </div>
    )
};

export default Profile;