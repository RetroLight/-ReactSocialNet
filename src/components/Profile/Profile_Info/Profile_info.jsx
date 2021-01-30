import React from "react";
import cssCls from "./Profile_info.module.css"
import Preloader1 from "../../Common/preloader/Preloader1";
import noAvatar from "../../../assets/img/noPhoto.jpeg";

const Profile_info = (props) => {
    if (!props.userProfile) {
        return <Preloader1/>
    } else {
            return (
                <div className={cssCls.Profile_info}>
                    {/*<div className={cssCls.main_img_wrapper}>*/}
                    {/*    <img*/}
                    {/*        src={props.userProfile.photos.large}*/}
                    {/*        // src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg"*/}
                    {/*        alt=""/>*/}
                    {/*</div>*/}
                    <div className={cssCls.userDataBlock}>
                        <div className={cssCls.avatar}>
                            <img src={props.userProfile.photos.large ? props.userProfile.photos.large : noAvatar} alt=""/>
                        </div>
                        <div className={cssCls.info}>
                            <div className={cssCls.info__fullName}>{props.userProfile.fullName}</div>
                            <div>{props.userProfile.aboutMe}</div>
                            <div>{props.userProfile.lookingForAJob ? 'В поиске' : 'Не ищу'}</div>
                            <div>{props.userProfile.lookingForAJob ? props.userProfile.lookingForAJobDescription : null}</div>
                        </div>
                    </div>
                </div>
            )
        }
    };

export default Profile_info;