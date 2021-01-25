import React from 'react';
import cssCls from './UsersList.module.css';
import noPhoto from '../../../assets/img/noPhoto.jpeg'
import Preloader1 from "../../Common/preloader/Preloader1";


const UsersList = (props) => {

    let total_user_pages = Math.ceil(props.total_users_count / props.items_count);
    let users_pagination_arr = [];

    for (let i = 1; i <= total_user_pages; i++) {
        users_pagination_arr.push(i);
    }

    return (
        <div className={cssCls.users}>
            {props.isFetching ? <Preloader1/> : null}
            <div className={cssCls.users_pages_row}>
                {
                    users_pagination_arr.map(page => {
                        return (
                            props.current_page === page ?
                                <span onClick={(e) => props.onPageClick(page)}
                                      className={cssCls.active_users_page_item}>{page}</span> :
                                <span onClick={(e) => props.onPageClick(page)}
                                      className={cssCls.users_page_item}>{page}</span>

                        );
                    })
                }
            </div>

            {
                props.usersList.map(user =>
                    <div className={cssCls.userItem}>
                        <div className={cssCls.photoBlock}>
                            <img src={user.photos.small ? user.photos.small : noPhoto} alt=""/>
                        </div>
                        <div className={cssCls.infoBlock}>
                            <div className={cssCls.userNameWrapper}>
                                <span className={cssCls.name}>{user.name}</span>&nbsp;
                                {/*<span className={cssCls.surname}>{user.surname}</span>*/}
                            </div>
                            <div className={cssCls.userInfoWrapper}>
                                <div className={cssCls.userLoc}>
                                    <div>{'user.location.city'}</div>
                                    <div>{'user.location.country'}</div>
                                </div>
                                <div className={cssCls.userStatus}>{user.status}</div>
                            </div>
                        </div>
                        <div className={cssCls.followBtnWrap}>
                            {
                                user.followed
                                    ? <button onClick={() => {
                                        props.unfollowBtn(user.id)
                                    }} className={cssCls.activeFollowBtn}>Отписаться</button>
                                    : <button onClick={() => {
                                        props.followBtn(user.id)
                                    }} className={cssCls.followBtn}>Подписаться</button>
                            }
                        </div>
                    </div>)
            }
        </div>
    )
};

export default UsersList;



