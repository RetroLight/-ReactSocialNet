import React from "react";
import cssCls from "./Profile_info.module.css"

const Profile_info = (props) => {
    return (
        <div className={cssCls.Profile_info}>
            <div className={cssCls.main_img_wrapper}>
                <img
                    src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"
                    alt=""/>
            </div>
            <div>
                avat + desc
            </div>
        </div>
    )
};

export default Profile_info;